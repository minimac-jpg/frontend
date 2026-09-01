export const __rspack_esm_id = 1682;
export const __rspack_esm_ids = [1682];
export const __webpack_modules__ = {
62889(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var _kysely_migration_tables_DFfmKhq_mjs__rspack_import_1 = __webpack_require__(41688);
/* import */ var kysely__rspack_import_0 = __webpack_require__(85741);
/* import */ var kysely__rspack_import_2 = __webpack_require__(19270);
/* import */ var kysely__rspack_import_3 = __webpack_require__(97278);


//#region src/node-sqlite-dialect.ts
var NodeSqliteAdapter = class {
	get supportsCreateIfNotExists() {
		return true;
	}
	get supportsTransactionalDdl() {
		return false;
	}
	get supportsReturning() {
		return true;
	}
	async acquireMigrationLock() {}
	async releaseMigrationLock() {}
	get supportsOutput() {
		return true;
	}
};
var NodeSqliteDriver = class {
	#config;
	#connectionMutex = new ConnectionMutex();
	#db;
	#connection;
	constructor(config) {
		this.#config = { ...config };
	}
	async init() {
		this.#db = this.#config.database;
		this.#connection = new NodeSqliteConnection(this.#db);
		if (this.#config.onCreateConnection) await this.#config.onCreateConnection(this.#connection);
	}
	async acquireConnection() {
		await this.#connectionMutex.lock();
		return this.#connection;
	}
	async beginTransaction(connection) {
		await connection.executeQuery(kysely__rspack_import_0/* .CompiledQuery.raw */.E.raw("begin"));
	}
	async commitTransaction(connection) {
		await connection.executeQuery(kysely__rspack_import_0/* .CompiledQuery.raw */.E.raw("commit"));
	}
	async rollbackTransaction(connection) {
		await connection.executeQuery(kysely__rspack_import_0/* .CompiledQuery.raw */.E.raw("rollback"));
	}
	async releaseConnection() {
		this.#connectionMutex.unlock();
	}
	async destroy() {
		this.#db?.close();
	}
};
var NodeSqliteConnection = class {
	#db;
	constructor(db) {
		this.#db = db;
	}
	executeQuery(compiledQuery) {
		const { sql, parameters } = compiledQuery;
		const stmt = this.#db.prepare(sql);
		const params = parameters;
		if (stmt.columns().length > 0) return Promise.resolve({ rows: stmt.all(...params) });
		const { changes, lastInsertRowid } = stmt.run(...params);
		return Promise.resolve({
			rows: [],
			numAffectedRows: BigInt(changes),
			insertId: typeof lastInsertRowid === "bigint" ? lastInsertRowid : BigInt(lastInsertRowid)
		});
	}
	async *streamQuery() {
		throw new Error("Streaming query is not supported by SQLite driver.");
	}
};
var ConnectionMutex = class {
	#promise;
	#resolve;
	async lock() {
		while (this.#promise !== void 0) await this.#promise;
		this.#promise = new Promise((resolve) => {
			this.#resolve = resolve;
		});
	}
	unlock() {
		const resolve = this.#resolve;
		this.#promise = void 0;
		this.#resolve = void 0;
		resolve?.();
	}
};
var NodeSqliteIntrospector = class {
	#db;
	constructor(db) {
		this.#db = db;
	}
	async getSchemas() {
		return [];
	}
	async getTables(options = { withInternalKyselyTables: false }) {
		let query = this.#db.selectFrom("sqlite_schema").where("type", "=", "table").where("name", "not like", "sqlite_%").select("name").$castTo();
		if (!options.withInternalKyselyTables) query = query.where("name", "!=", _kysely_migration_tables_DFfmKhq_mjs__rspack_import_1.n).where("name", "!=", _kysely_migration_tables_DFfmKhq_mjs__rspack_import_1.t);
		const tables = await query.execute();
		return Promise.all(tables.map(({ name }) => this.#getTableMetadata(name)));
	}
	async getMetadata(options) {
		return { tables: await this.getTables(options) };
	}
	async #getTableMetadata(table) {
		const db = this.#db;
		const autoIncrementCol = (await db.selectFrom("sqlite_master").where("name", "=", table).select("sql").$castTo().execute())[0]?.sql?.split(/[\(\),]/)?.find((it) => it.toLowerCase().includes("autoincrement"))?.split(/\s+/)?.[0]?.replace(/["`]/g, "");
		return {
			name: table,
			columns: (await db.selectFrom((0,kysely__rspack_import_2/* .sql */.l)`pragma_table_info(${table})`.as("table_info")).select([
				"name",
				"type",
				"notnull",
				"dflt_value"
			]).execute()).map((col) => ({
				name: col.name,
				dataType: col.type,
				isNullable: !col.notnull,
				isAutoIncrementing: col.name === autoIncrementCol,
				hasDefaultValue: col.dflt_value != null
			})),
			isView: false
		};
	}
};
var NodeSqliteQueryCompiler = class extends kysely__rspack_import_3/* .DefaultQueryCompiler */.n {
	getCurrentParameterPlaceholder() {
		return "?";
	}
	getLeftIdentifierWrapper() {
		return "\"";
	}
	getRightIdentifierWrapper() {
		return "\"";
	}
	getAutoIncrement() {
		return "autoincrement";
	}
};
var NodeSqliteDialect = class {
	#config;
	constructor(config) {
		this.#config = { ...config };
	}
	createDriver() {
		return new NodeSqliteDriver(this.#config);
	}
	createQueryCompiler() {
		return new NodeSqliteQueryCompiler();
	}
	createAdapter() {
		return new NodeSqliteAdapter();
	}
	createIntrospector(db) {
		return new NodeSqliteIntrospector(db);
	}
};
//#endregion


__webpack_require__.d(__webpack_exports__, {
  NodeSqliteDialect: () => (NodeSqliteDialect)
});


},

};
