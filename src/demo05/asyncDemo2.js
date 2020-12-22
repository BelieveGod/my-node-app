function timeout(ms) {
    return new Promise((resolve) => {
        console.log('time out ...')
        setTimeout(resolve, ms);
    });
}

async function asyncPrint(value, ms) {
    await timeout(ms);
    console.log(value);
}

// 另一种写法


async function timeout2(ms) {
    await new Promise((resolve) => {
        console.log('time out2 ...')
        setTimeout(resolve, ms);
    });
}

async function asyncPrint2(value, ms) {
    await timeout2(ms);
    console.log(value);
}

asyncPrint('hello world', 1000);
asyncPrint2('hello world2', 1000);