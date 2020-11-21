
let url = "https://www.reddit.com/r/popular.json";
let chart = "";
console.log(url);
const fetchPromise = fetch(url);

let settings = { method: "Get" };
let chartValues = [];

async function getData() {
    await fetch(url, settings)
        .then(res => res.json())
        .then((json) => {
            let listSize = json.data.children.length;
            // Loop to pick 5 random entries
            for (x = 0; x < 5; x++) {
                let n = Math.floor((Math.random() * listSize) + 1);
                let data_reddit = json.data.children[n];
                subreddit = data_reddit.subreddit;
                author = data_reddit.author;
                title = data_reddit.title;
                ups = data_reddit.ups;
            
                let message = "<b>Subreddit </b>: " + subreddit + " <b>Author</b>:" + author + " <b>Title</b>:" + title + " <b>Up votes</b>: " + ups;
                let list = document.getElementById("redditList");
                let ul = document.getElementById("redditList");
                let li = document.createElement("li");
                ul.appendChild(li);

                /*
                    Get a random number within the size of the list
                    Get subreddit, author, title, and ups from record
                    Set the message to be:
                        let message = "<b>Subreddit </b>: " + subreddit + " <b>Author</b>:" + author + " <b>Title</b>:" + title + " <b>Up votes</b>: " + ups;
                    Add a new <li> element with the message to the 'redditList' element
                    Add a data entry to chartValues with author as the label and ups as the y component
                */
    

                /*.......*/
                
                let addToChart = {'label':author,y:ups}; // Gave this. This needs to be added to the 'chartValues'
                chartValues.push(addToChart);
                /*.......*/
            }
        })
        .then(values => console.log(chartValues));
        chart.render(); // Do you need to remove the comments from here in order to get it to work?
};

window.onload = async function makeChart() {
    getData();
    chart = new CanvasJS.Chart("chartContainer", {
        title: {
            text: "Upvotes"
        },

        data: [     
            { 
                type: "column",
                name: "Popular Reddit",
                dataPoints: chartValues,
            }
        ]
    });
    
    chart.render();
}

window.onload = makeChart();