import { AzureFunction, Context } from "@azure/functions"

const queueTrigger: AzureFunction = async function (context: Context, myQueueItem: string): Promise<void> {
    context.log('Queue trigger function 13 processed work item', myQueueItem);
    if (myQueueItem) {
        //context.bindings.cosmosDocument = JSON.stringify({
            context.bindings.cosmosDocument = {
            // create a random ID
            id: new Date().toISOString() + Math.random().toString().substring(2, 10),
            queue: {
                other:myQueueItem,
                myobj:2
            },
            try:1
        };

    }
};

export default queueTrigger;
