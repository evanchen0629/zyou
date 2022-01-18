"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quicktypeJSONSchema = exports.quicktypeJSON = void 0;
const quicktype_core_1 = require("quicktype-core");
async function quicktypeJSON(targetLanguage, typeName, jsonString) {
    const jsonInput = (0, quicktype_core_1.jsonInputForTargetLanguage)(targetLanguage);
    // We could add multiple samples for the same desired
    // type, or many sources for other types. Here we're
    // just making one type from one piece of sample JSON.
    await jsonInput.addSource({
        name: typeName,
        samples: [jsonString],
    });
    const inputData = new quicktype_core_1.InputData();
    inputData.addInput(jsonInput);
    return await (0, quicktype_core_1.quicktype)({
        inputData,
        lang: targetLanguage,
        allPropertiesOptional: true,
        rendererOptions: {
            'just-types': 'true',
            'runtime-typecheck': 'true',
            'acronym-style': 'original',
        },
    });
}
exports.quicktypeJSON = quicktypeJSON;
async function quicktypeJSONSchema(targetLanguage, typeName, jsonSchemaString) {
    const schemaInput = new quicktype_core_1.JSONSchemaInput(new quicktype_core_1.FetchingJSONSchemaStore());
    // We could add multiple schemas for multiple types,
    // but here we're just making one type from JSON schema.
    await schemaInput.addSource({ name: typeName, schema: jsonSchemaString });
    const inputData = new quicktype_core_1.InputData();
    inputData.addInput(schemaInput);
    return await (0, quicktype_core_1.quicktype)({
        inputData,
        lang: targetLanguage,
        allPropertiesOptional: true,
        rendererOptions: {
            'just-types': 'true',
            'runtime-typecheck': 'true',
            'acronym-style': 'original',
        },
    });
}
exports.quicktypeJSONSchema = quicktypeJSONSchema;
