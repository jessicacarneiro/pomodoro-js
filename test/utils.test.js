const utils = require('../src/utils');

test('adds 9m:53s to 18:51:15 should result in 19:01:08', () => {
    let resultDate = utils.addMinutesToDate(new Date(2020, 7, 10, 18, 51, 15), 9, 53); 
    let expectedDate = new Date(2020, 7, 10, 19, 1, 8);
    expect(resultDate).toMatchObject(expectedDate);
});

test('adds 15m to 11:45:00 should result in 12:00:00', () => {
    let resultDate = utils.addMinutesToDate(new Date(1998, 3, 30, 11, 45, 0), 15);
    let expectedDate = new Date(1998, 3, 30, 12, 0, 0);
    expect(resultDate).toMatchObject(expectedDate);
});

test('subtracts 18:51:15 from 19:01:08 should result [9, 53]', () => {
    let resultTime = utils.subtractTime(new Date(2020, 7, 10, 18, 51, 15), 
                                        new Date(2020, 7, 10, 19, 1, 8));
    expect(resultTime).toEqual([9, 53]);
});

test('subtracts 18:51:15 from 18:51:34 should return 19000', () => {
    let resultTimeInMs = utils.subtractTimeInMs(new Date(2020, 7, 10, 18, 51, 15), 
                                                new Date(2020, 7, 10, 18, 51, 34));
    expect(resultTimeInMs).toEqual(19000);
});

test('padIntTwo of 15 should return \'15\'', () => {
    expect(utils.padIntTwo(15)).toEqual('15');
});

test('padIntTwo of 2 should return \'02\'', () => {
    expect(utils.padIntTwo(2)).toEqual('02');
});