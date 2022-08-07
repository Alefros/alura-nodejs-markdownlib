const getFile = require('../index');

const ASSETS_PATH = './test/files/';
const ASSET_FILEPATH_1 = ASSETS_PATH + 'test-text1.md';
const ASSET_FILEPATH_2 = ASSETS_PATH + 'test-text2.md';
const ARRAY_RESULT_1 = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
]

describe('getFile::', () => {
    it('Must be a function', () => {
        expect(typeof getFile).toBe('function');
    });
    it('Must be return results array::', async () => {
        const result = await getFile(ASSET_FILEPATH_1); 
        expect(result).toEqual(ARRAY_RESULT_1);
    });
});

