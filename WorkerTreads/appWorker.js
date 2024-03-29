const { Worker } = require("worker_threads");

const compute = (array) => {
    return new Promise((resolve, reject) => {
        const worker = new Worker("./worker.js", {
            workerData: {
                array,
            },
        });
        worker.on("message", (msg) => {
            resolve(msg);
        });
        worker.on("error", (err) => {
            reject(err);
        });

        worker.on("exit", () => {
            console.log("end");
        });
    });
};

const main = async () => {
    try {
        performance.mark("start");
        await Promise.all([
            compute([25, 20, 19, 48, 30, 50]),
            compute([25, 20, 19, 48, 30, 50]),
            compute([25, 20, 19, 48, 30, 50]),
            compute([25, 20, 19, 48, 30, 50]),
        ]);
        performance.mark("end");
        performance.measure("main", "start", "end");
        console.log(performance.getEntriesByName("main").pop());
    } catch (e) {
        console.error(e.message);
    }
};
main().then();
