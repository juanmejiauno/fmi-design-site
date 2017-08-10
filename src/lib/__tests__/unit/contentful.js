import ContentfulClient, { getReferenceField } from 'lib/contentful';
import fixture from '__tests__/lib/fixtures/homepage-fixture';

const PREVIEW_TOKEN = 'PREVIEW_TOKEN';
const DELIVERY_TOKEN = 'DELIVERY_TOKEN';

global.PREVIEW_TOKEN = PREVIEW_TOKEN;
process.env.deliveryToken = DELIVERY_TOKEN;

describe('ContentfulClient', () => {
  let client;

  beforeEach(() => {
    client = new ContentfulClient();
  });

  /***********************************
    Construction
  ***********************************/

  it('should use Delivery API when no argument specified', () => {
    expect(client.options.accessToken).to.equal(DELIVERY_TOKEN);
  });

  it('should use Preview API when argument is true', () => {
    client = new ContentfulClient(true);
    expect(client.options.accessToken).to.equal(PREVIEW_TOKEN);
  });

  /***********************************
    Method :: initialize
  ***********************************/

  describe('initialize', () => {
    it('should call this.client.getSpace', async () => {
      const stub = sinon.stub(client.client, 'getSpace');
      stub.resolves(true);
      await client.initialize();
      expect(stub).to.have.been.called;
    });

    it('should set authorized to true', async () => {
      const stub = sinon.stub(client.client, 'getSpace');
      stub.resolves(true);
      expect(client.authorized).to.equal(false);
      await client.initialize();
      expect(client.authorized).to.equal(true);
    });

    it('should only authorize client once', async () => {
      const stub = sinon.stub(client.client, 'getSpace');
      stub.resolves(true);
      await client.initialize();
      expect(stub).to.have.been.calledOnce;
      await client.initialize();
      expect(stub).to.have.been.calledOnce;
    });
  });

  /***********************************
    Method :: getEntry
  ***********************************/

  describe('getEntry', () => {
    it('should call this.client.getEntries', async () => {
      const stub = sinon.stub(client.client, 'getEntries');
      stub.resolves(fixture);
      await client.getEntry('home', 'homePage');
      expect(stub).to.have.been.called;
    });

    it('should use default query options when no custom specified', async () => {
      const stub = sinon.stub(client.client, 'getEntries');
      stub.resolves(fixture);
      await client.getEntry('home', 'homePage');
      expect(stub).to.have.been.calledWith({ limit: 1, 'fields.slug': 'home', content_type: 'homePage' });
    });

    it('should use (overridable) custom query options', async () => {
      const stub = sinon.stub(client.client, 'getEntries');
      stub.resolves(fixture);
      await client.getEntry('home', 'homePage', { limit: 2, include: 5 });
      expect(stub).to.have.been.calledWith({
        'fields.slug': 'home',
        content_type: 'homePage',
        limit: 1,
        include: 5,
      });
    });

    it('should return a single entry', async () => {
      const stub = sinon.stub(client.client, 'getEntries');
      stub.resolves(fixture);
      const result = await client.getEntry('home', 'homePage');
      expect(result).to.deep.equal(fixture.items[0]);
    });
  });

  /***********************************
    Method :: getEntries
  ***********************************/

  describe('getEntries', () => {
    it('should call this.client.getEntries with expected query', async () => {
      const stub = sinon.stub(client.client, 'getEntries');
      const query = { content_type: 'homePage' };
      stub.resolves(fixture);
      await client.getEntries(query);
      expect(stub).to.have.been.calledWith(query);
    });

    it('should return multiple entries', async () => {
      const stub = sinon.stub(client.client, 'getEntries');
      stub.resolves(fixture);
      const result = await client.getEntries('home', 'homePage');
      expect(result).to.deep.equal(fixture.items);
    });
  });

  /***********************************
    Method :: getSingleton
  ***********************************/

  describe('getSingleton', () => {
    it('should call this.client.getEntries', async () => {
      const stub = sinon.stub(client.client, 'getEntries');
      stub.resolves(fixture);
      await client.getSingleton('homePage');
      expect(stub).to.have.been.called;
    });

    it('should use default query options when no custom specified', async () => {
      const stub = sinon.stub(client.client, 'getEntries');
      stub.resolves(fixture);
      await client.getSingleton('homePage');
      expect(stub).to.have.been.calledWith({
        limit: 1,
        content_type: 'homePage',
      });
    });

    it('should use (overridable) custom query options', async () => {
      const stub = sinon.stub(client.client, 'getEntries');
      stub.resolves(fixture);
      await client.getSingleton('homePage', { limit: 2, include: 5 });
      expect(stub).to.have.been.calledWith({
        content_type: 'homePage',
        limit: 1,
        include: 5,
      });
    });

    it('should return a single entry', async () => {
      const stub = sinon.stub(client.client, 'getEntries');
      stub.resolves(fixture);
      const result = await client.getSingleton('homePage');
      expect(result).to.deep.equal(fixture.items[0]);
    });
  });

  /***********************************
    Method :: getEntriesByCategory
  ***********************************/

  describe('getEntriesByCategory', () => {
    it('should call this.client.getEntries', async () => {
      const stub = sinon.stub(client.client, 'getEntries');
      stub.resolves(fixture);
      await client.getEntriesByCategory('test', 'homePage');
      expect(stub).to.have.been.called;
    });

    it('should use default query options when no custom specified', async () => {
      const stub = sinon.stub(client.client, 'getEntries');
      stub.resolves(fixture);
      await client.getEntriesByCategory('test', 'homePage');
      expect(stub).to.have.been.calledWith({
        'fields.linkedCategories.sys.id': 'test',
        content_type: 'homePage',
        include: 0,
      });
    });

    it('should use (overridable) custom query options', async () => {
      const stub = sinon.stub(client.client, 'getEntries');
      stub.resolves(fixture);
      await client.getEntriesByCategory('test', 'homePage', { include: 5, content_type: 'basicArticle' });
      expect(stub).to.have.been.calledWith({
        'fields.linkedCategories.sys.id': 'test',
        content_type: 'homePage',
        include: 5,
      });
    });

    it('should return multiple entries', async () => {
      const stub = sinon.stub(client.client, 'getEntries');
      stub.resolves(fixture);
      const result = await client.getEntriesByCategory('test', 'homePage');
      expect(result).to.deep.equal(fixture.items);
    });
  });
});

/***********************************
  Method :: getReferenceField
***********************************/

describe('getReferenceField', () => {
  it('should return referenced field when it contains a fields prop', () => {
    const entry = { fields: { reference: { fields: {} } } };
    expect(getReferenceField(entry, 'reference')).to.equal(entry.fields.reference);
  });

  it('should return multiple referenced fields when they contain a fields prop', () => {
    const entry = { fields: { reference: [{ fields: {} }, { fields: {} }] } };
    expect(getReferenceField(entry, 'reference')).to.deep.equal(entry.fields.reference);
  });

  it('should return null when a reference field has no fields', () => {
    const entry = { fields: { reference: {} } };
    expect(getReferenceField(entry, 'reference')).to.be.null;
  });

  it('should filter out referenced fields without fields', () => {
    const entry = { fields: { reference: [{ fields: {} }, {}] } };
    expect(getReferenceField(entry, 'reference')).to.deep.equal([entry.fields.reference[0]]);
  });

  it('should return null if the entry has no fields', () => {
    const entry = {};
    expect(getReferenceField(entry, 'reference')).to.be.null;
  });

  it('should return null if the entry has no field for the passed field name', () => {
    const entry = { fields: {} };
    expect(getReferenceField(entry, 'reference')).to.be.null;
  });
});
