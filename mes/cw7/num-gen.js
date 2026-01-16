async function* createNumberGenerator(limit, delay = 1000) {
    for (let i = 1; i <= limit; i++) {
        await new Promise(resolve => setTimeout(resolve, delay));
        yield i;
    }
}

async function* createNumberGeneratorAdvanced(limit, delay = 1000) {
    let current = 1;
    
    while (current <= limit) {
        const promise = new Promise(resolve => {
            setTimeout(() => {
                resolve(current);
            }, delay);
        });
        
        const result = await promise;
        yield result;
        current++;
    }
}

const testGenerator = async () => {
    console.log("🔄 Запуск простого генератора:");
    const generator = createNumberGenerator(3, 1000);
    
    for await (const number of generator) {
        console.log(`Получено число: ${number}`);
    }
    
    console.log("✅ Генератор завершен!");
};

testGenerator();