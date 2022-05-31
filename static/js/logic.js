// Include Richard Boleman for Fastest Finger Question Example
// Include Carl Lewis for obscure questions example


// Function Declarations


// HTML Dropdown function
function dropdownFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
};

// Add Dropdown to Navbar
window.onclick = function(event) {
    if (!event.target.matches('#navbarDropdown')) {
      let dropdowns = document.getElementsByClassName("dropdown-menu");
    //   dropdowns.css("color", "white");
    //   dropdowns.css("background-color", "hsla(0, 0%, 0%, 0)");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        };
      };
    };
};

// Mode Function
function mode(array) {
    let max = 1;
    let counter = 0;
    let mode_value;
    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            if (array[i] == array[j]) {
                counter++;
            };
            if (max < counter) {
                max = counter;
                mode_value = array[i];
            };
        };

        counter = 0;
    };
    
    return mode_results = {mode: mode_value, frequency: max};
};

// Function to Fix issues with Javascript rounding
function truncate (num, places) {
    return Math.trunc(num * Math.pow(10, places)) / Math.pow(10, places);
};


// ATA Graphs And Table
// ATA Graphs And Table
// ATA Graphs And Table
// Table for ata Question Data
function ata_question_table(q, u, v, w, x, y, z, div) {
    let table_columns = [["# of Times Used", "# of Times Audience Correct", "# of Times Audience Wrong", "% Who Used Ask the Audience", "% of Runs Audience was Correct", "Average % When Audience Correct"], [u, v, w, `${x}%`, `${y}%`, `${z}%`]];

    let data = [{
        type: 'table',
        header: {
          values: [["<b>Ask The Audience</b>"], [`<b>Question ${q}</b>`]],
          align: "center",
          line: {width: 1, color: '#AAAAAA'},
          fill: {color: "hsla(0, 0%, 0%, 0%)"},
          font: {family: "Arial", size: 14, color: "#AAAAAA"}
        },
        cells: {
          values: table_columns,
          height: 30,
          align: "center",
          line: {color: "#AAAAAA", width: 1},
          fill: {color: "hsla(0, 0%, 0%, 0%)"},
          font: {family: "Arial", size: 14, color: ["#AAAAAA"]}
        }
      }];

      let ata_table_layout = {
        // title: {
        //     text: "Question Data",
        //     font: {
        //         color: "#AAAAAA",
        //         size: 20
        //     },
        // },
        height: 500,
        width: 500,
        paper_bgcolor: "rgba(0,0,0,0)",
        // plot_bgcolor: 'rgba(0,0,0,0)',
    };
      
      Plotly.newPlot(div, data, ata_table_layout);
};
// Graph function for ata count
function ata_count_graph_generate(x, y, div) {

    let trace = {
        x: x,
        y: y,
        hovertemplate: '%{y} Contestants<extra></extra>',
        marker: {
            color: '#AAAAAA',
        },
        type: "scatter"
    };

    let data_ata = [trace];

    let ata_graph_layout = {
        title: {
            text: "Ask The Audience Counts",
            font: {
                color: "#AAAAAA",
                size: 20
            },
        },
        xaxis: {
            title: "Question #",
            titlefont: {
                color: "#AAAAAA",
                size: 15
            },
            tickfont: {
            color: "#AAAAAA",
            size: 13
            },
        },
        yaxis: {
            title: "# of Times Lifeline Used",
            titlefont: {
                color: "#AAAAAA",
                size: 15
            },
            tickfont: {
                color: "#AAAAAA",
                size: 13
            },
        },
        height: 410,
        width: 430,
        paper_bgcolor: "rgba(0,0,0,0)",
        plot_bgcolor: 'rgba(0,0,0,0)',
    };


    Plotly.newPlot(div, data_ata, ata_graph_layout);

};
// Graph function for ata accuracy %
function ata_percent_graph_generate(x, y, z, div) {

    let trace = {
        x: x,
        y: y,
        hovertemplate: '%{y:.2%} Audience Correct<extra></extra>',
        marker: {
            color: 'rgb(200,0,0)',
        },
        type: "scatter",
        name: "% Audience Correct"
    };

    let trace2 = {
        x: x,
        y: z,
        hovertemplate: '%{y:.2%} Average Audience Answered Correct<extra></extra>',
        marker: {
            color: 'rgb(101,108,248)',
        },
        type: "scatter",
        name: "% Average Audience Answered Correct"
    };

    let data_ata = [trace, trace2];

    let ata_graph_layout = {
        title: {
            text: "Ask The Audience Accuracy",
            font: {
                color: "#AAAAAA",
                size: 20
            },
        },
        xaxis: {
            title: "Question #",
            titlefont: {
                color: "#AAAAAA",
                size: 15
            },
            tickfont: {
            color: "#AAAAAA",
            size: 13
            },
        },
        yaxis: {
            title: "% Correct",
            titlefont: {
                color: "#AAAAAA",
                size: 15
            },
            tickfont: {
                color: "#AAAAAA",
                size: 13
            },
        },
        legend: {
            x: 0,
            y: -0.25,
            "orientation": "h",
            font: {
                size: 12,
                color: '#AAAAAA'
              },
        },
        height: 430,
        width: 430,
        paper_bgcolor: "rgba(0,0,0,0)",
        plot_bgcolor: 'rgba(0,0,0,0)',
    };


    Plotly.newPlot(div, data_ata, ata_graph_layout);

};


// FF Graphs And Table
// FF Graphs And Table
// FF Graphs And Table
// Table for ff Question Data
function ff_question_table(q, w, x, y, z, div) {
    let table_columns = [["# of Times Used", "# of Times Helped Get Correct", "# of Times Did Not Get Correct", "% Correct When Used"], [w, x, y, `${z}%`]];

    let data = [{
        type: 'table',
        header: {
          values: [["<b> 50 : 50 </b>"], [`<b>Question ${q}</b>`]],
          align: "center",
          line: {width: 1, color: '#AAAAAA'},
          fill: {color: "hsla(0, 0%, 0%, 0%)"},
          font: {family: "Arial", size: 16, color: "#AAAAAA"}
        },
        cells: {
          values: table_columns,
          height: 30,
          align: "center",
          line: {color: "#AAAAAA", width: 1},
          fill: {color: "hsla(0, 0%, 0%, 0%)"},
          font: {family: "Arial", size: 16, color: ["#AAAAAA"]}
        }
      }];

      let ata_table_layout = {
        height: 500,
        width: 500,
        paper_bgcolor: "rgba(0,0,0,0)",
    };
      
      Plotly.newPlot(div, data, ata_table_layout);
};
// Graph Function for ff count
function ff_count_graph_generate(x, y, div) {

    let trace = {
        x: x,
        y: y,
        hovertemplate: '%{y} Contestants<extra></extra>',
        marker: {
            color: '#AAAAAA',
        },
        type: "scatter"
    };

    let data_ata = [trace];

    let ata_graph_layout = {
        title: {
            text: " 50 : 50 Counts",
            font: {
                color: "#AAAAAA",
                size: 20
            },
        },
        xaxis: {
            title: "Question #",
            titlefont: {
                color: "#AAAAAA",
                size: 15
            },
            tickfont: {
            color: "#AAAAAA",
            size: 13
            },
        },
        yaxis: {
            title: "# of Times Lifeline Used",
            titlefont: {
                color: "#AAAAAA",
                size: 15
            },
            tickfont: {
                color: "#AAAAAA",
                size: 13
            },
        },
        height: 410,
        width: 430,
        paper_bgcolor: "rgba(0,0,0,0)",
        plot_bgcolor: 'rgba(0,0,0,0)',
    };


    Plotly.newPlot(div, data_ata, ata_graph_layout);

};
// Graph function for ff accuracy %
function ff_percent_graph_generate(x, y, div) {

    let trace = {
        x: x,
        y: y,
        hovertemplate: '%{y:.2%}%<extra></extra>',
        marker: {
            color: '#AAAAAA',
        },
        type: "scatter",
        name: "% Correct"
    };

    let data_ata = [trace];

    let ata_graph_layout = {
        title: {
            text: " 50 : 50 Accuracy",
            font: {
                color: "#AAAAAA",
                size: 20
            },
        },
        xaxis: {
            title: "Question #",
            titlefont: {
                color: "#AAAAAA",
                size: 15
            },
            tickfont: {
            color: "#AAAAAA",
            size: 13
            },
        },
        yaxis: {
            title: "% Correct",
            titlefont: {
                color: "#AAAAAA",
                size: 15
            },
            tickfont: {
                color: "#AAAAAA",
                size: 13
            },
        },
        legend: {
            x: 0,
            y: -0.25,
            "orientation": "h",
            font: {
                size: 12,
                color: '#AAAAAA'
              },
        },
        height: 430,
        width: 430,
        paper_bgcolor: "rgba(0,0,0,0)",
        plot_bgcolor: 'rgba(0,0,0,0)',
    };


    Plotly.newPlot(div, data_ata, ata_graph_layout);

};



// PAF Graphs And Tables
// PAF Graphs And Tables
// PAF Graphs And Tables
// Table for paf Question Data
function paf_question_table(q, w, x, y, z, div) {
    let table_columns = [["# of Times Used", "# of Times Helped Get Correct", "# of Times Did Not Know", "% Correct When Used"], [w, x, y, `${z}%`]];

    let data = [{
        type: 'table',
        header: {
          values: [["<b>Phone A Friend</b>"], [`<b>Question ${q}</b>`]],
          align: "center",
          line: {width: 1, color: '#AAAAAA'},
          fill: {color: "hsla(0, 0%, 0%, 0%)"},
          font: {family: "Arial", size: 16, color: "#AAAAAA"}
        },
        cells: {
          values: table_columns,
          height: 30,
          align: "center",
          line: {color: "#AAAAAA", width: 1},
          fill: {color: "hsla(0, 0%, 0%, 0%)"},
          font: {family: "Arial", size: 16, color: ["#AAAAAA"]}
        }
      }];

      let ata_table_layout = {
        height: 500,
        width: 500,
        paper_bgcolor: "rgba(0,0,0,0)",
    };
      
      Plotly.newPlot(div, data, ata_table_layout);
};
// Graph Function for paf count
function paf_count_graph_generate(x, y, div) {

    let trace = {
        x: x,
        y: y,
        hovertemplate: '%{y} Contestants<extra></extra>',
        marker: {
            color: '#AAAAAA',
        },
        type: "scatter"
    };

    let data_ata = [trace];

    let ata_graph_layout = {
        title: {
            text: "Phone A Friend Counts",
            font: {
                color: "#AAAAAA",
                size: 20
            },
        },
        xaxis: {
            title: "Question #",
            titlefont: {
                color: "#AAAAAA",
                size: 15
            },
            tickfont: {
            color: "#AAAAAA",
            size: 13
            },
        },
        yaxis: {
            title: "# of Times Lifeline Used",
            titlefont: {
                color: "#AAAAAA",
                size: 15
            },
            tickfont: {
                color: "#AAAAAA",
                size: 13
            },
        },
        height: 410,
        width: 430,
        paper_bgcolor: "rgba(0,0,0,0)",
        plot_bgcolor: 'rgba(0,0,0,0)',
    };


    Plotly.newPlot(div, data_ata, ata_graph_layout);

};
// Graph function for paf accuracy %
function paf_percent_graph_generate(x, y, div) {

    let trace = {
        x: x,
        y: y,
        hovertemplate: '%{y:.2%}%<extra></extra>',
        marker: {
            color: '#AAAAAA',
        },
        type: "scatter",
        name: "% Correct"
    };

    let data_ata = [trace];

    let ata_graph_layout = {
        title: {
            text: "Phone A Friend Accuracy",
            font: {
                color: "#AAAAAA",
                size: 20
            },
        },
        xaxis: {
            title: "Question #",
            titlefont: {
                color: "#AAAAAA",
                size: 15
            },
            tickfont: {
            color: "#AAAAAA",
            size: 13
            },
        },
        yaxis: {
            title: "% Correct",
            titlefont: {
                color: "#AAAAAA",
                size: 15
            },
            tickfont: {
                color: "#AAAAAA",
                size: 13
            },
        },
        legend: {
            x: 0,
            y: -0.25,
            "orientation": "h",
            font: {
                size: 12,
                color: '#AAAAAA'
              },
        },
        height: 430,
        width: 430,
        paper_bgcolor: "rgba(0,0,0,0)",
        plot_bgcolor: 'rgba(0,0,0,0)',
    };


    Plotly.newPlot(div, data_ata, ata_graph_layout);

};


// Outcome Table
// Outcome Table
// Outcome Table
// Table for paf Question Data Questions 1 - 14
function outcome_question_table(q, v, u, w, x, y, z, div) {

    let table_columns = [[]];

    // Fix NaN% on page load
    if (q === "#") {
        table_columns = [["Total Runs", "Runs Ended", "Walked", "Games Lost",  "Walked%", "Games Lost%"], [v, u, w, x, `${y}%`, `${z}%`]];

    }
    else {
        table_columns = [["Total Runs", "Runs Ended", "Walked", "Games Lost",  "Walked%", "Games Lost%"], [`${v}, ${truncate((v/724).toFixed(4)*100, 2)}%`, u, w, x, `${y}%`, `${z}%`]];
    }

    let value_array = ['0', '100', '200', '300', '500', '1,000', '2,000', '4,000', '8,000', '16,000', '32,000', '64,000', '125,000', '250,000', '500,000', '1,000,000'];

    let value = 0;

    if (q > 0) {
        value = q;
    };


    let data = [{
        type: 'table',
        columnwidth: [1000,1400],
        header: {
            values: [["<b>Game Outcome</b>"], [`<b>Question ${q} $${value_array[value]}</b>`]],
            align: "center",
            line: {width: 1, color: '#AAAAAA'},
            fill: {color: "hsla(0, 0%, 0%, 0%)"},
            font: {family: "Arial", size: 16, color: "#AAAAAA"}
        },
        cells: {
            values: table_columns,
            height: 30,
            align: "center",
            line: {color: "#AAAAAA", width: 1},
            fill: {color: "hsla(0, 0%, 0%, 0%)"},
            font: {family: "Arial", size: 16, color: ["#AAAAAA"]}
        }
    }];


    let ata_table_layout = {
        height: 500,
        width: 500,
        paper_bgcolor: "rgba(0,0,0,0)",
    };
      
      Plotly.newPlot(div, data, ata_table_layout);
};

// Table for paf Question Data Question 15
function outcome_question_table_final(q, v, u, w, x, y, z, div) {
    let table_columns = [["Total Runs", "Walked", "Games Won", "Games Lost",  "Games Won%", "Games Lost%"], [`${v}, ${truncate((v/724).toFixed(4)*100, 2)}%`, u, w, x, `${y}%`, `${z}%`]];

    let value_array = ['0', '100', '200', '300', '500', '1,000', '2,000', '4,000', '8,000', '16,000', '32,000', '64,000', '125,000', '250,000', '500,000', '1,000,000'];

    let value = 0;

    if (q > 0) {
        value = q;
    };


    let data = [{
        type: 'table',
        columnwidth: [1000,1400],
        header: {
            values: [["<b>Game Outcome</b>"], [`<b>Question ${q} $${value_array[value]}</b>`]],
            align: "center",
            line: {width: 1, color: '#AAAAAA'},
            fill: {color: "hsla(0, 0%, 0%, 0%)"},
            font: {family: "Arial", size: 16, color: "#AAAAAA"}
        },
        cells: {
            values: table_columns,
            height: 30,
            align: "center",
            line: {color: "#AAAAAA", width: 1},
            fill: {color: "hsla(0, 0%, 0%, 0%)"},
            font: {family: "Arial", size: 16, color: ["#AAAAAA"]}
        }
    }];


    let ata_table_layout = {
        height: 500,
        width: 500,
        paper_bgcolor: "rgba(0,0,0,0)",
    };
      
      Plotly.newPlot(div, data, ata_table_layout);
};



// Generate Graph for all 3 lifelines
function all_three_graph_generate(x, w, y, z, div) {
    let trace = {
        x: x,
        y: w,
        hovertemplate: 'Ask THe Audience Correct: %{y:.2%}<extra></extra>',
        marker: {
            color: 'rgb(200,0,0)',
        },
        type: "scatter",
        name: "Ask The Audience Correct %"
    };

    let trace2 = {
        x: x,
        y: y,
        hovertemplate: '50 : 50 Correct: %{y:.2%}<extra></extra>',
        marker: {
            color: 'rgb(101,108,248)',
        },
        type: "scatter",
        name: "50 : 50 Correct %"
    };

    let trace3 = {
        x: x,
        y: z,
        hovertemplate: 'Phone A Friend Correct: %{y:.2%}<extra></extra>',
        marker: {
            color: 'rgb(0,150,150)',
        },
        type: "scatter",
        name: "Phone A Friend Correct %"
    };

    let data_all = [trace, trace2, trace3];

    let all_graph_layout = {
        title: {
            text: "Accuracy % For All 3 Lifelines",
            font: {
                color: "#AAAAAA",
                size: 20
            },
        },
        xaxis: {
            title: "Question #",
            titlefont: {
                color: "#AAAAAA",
                size: 15
            },
            tickfont: {
            color: "#AAAAAA",
            size: 13
            },
        },
        yaxis: {
            title: "% Correct",
            titlefont: {
                color: "#AAAAAA",
                size: 15
            },
            tickfont: {
                color: "#AAAAAA",
                size: 13
            },
        },
        legend: {
            x: 0,
            y: -0.25,
            "orientation": "h",
            font: {
                size: 12,
                color: '#AAAAAA'
              },
        },
        height: 430,
        width: 600,
        paper_bgcolor: "rgba(0,0,0,0)",
        plot_bgcolor: 'rgba(0,0,0,0)',
    };


    Plotly.newPlot(div, data_all, all_graph_layout);



};

// All 3 Lifelines Graph Data
// All 3 Lifelines Graph Data
// All 3 Lifelines Graph Data
function all_three_graph_data(div) {

    let div1 = div;

    let count_ata = [];
    let count_ff = [];
    let count_paf = [];
    let correct_ata = [];
    let correct_ff = [];
    let correct_paf = [];
    let x_axis = Array.from({length: 15}, (v, k) => k+1);

    for (i = 1; i < 16; i++) {
        d3.json(`ask_the_audience_question_used/${i}`, function(error, data) {
            if (error) console.warn(error);

            count_ata.push(data.ask_the_audience_correct.reduce(function(a,b) {return a + b}));

            correct_ata.push(data.ask_the_audience_correct.filter(x => x == 1).length/data.ask_the_audience_correct.length);
        
        });

        d3.json(`fifty_fifty_question_used/${i}`, function(error, data) {
            if (error) console.warn(error);
    
            count_ff.push(data.fifty_fifty_correct.reduce(function(a,b) {return a + b}));
    
            correct_ff.push(data.fifty_fifty_correct.filter(x => x == 1).length/data.fifty_fifty_correct.length);

        });

        d3.json(`phone_a_friend_question_used/${i}`, function(error, data) {
            if (error) console.warn(error);

            if (data.phone_a_friend.length == 0) {
                count_paf.push(0);
                correct_paf.push(0);

                all_three_graph_generate(x_axis, correct_ata, correct_ff, correct_paf, div1);

            }

            else {
            count_paf.push(data.phone_a_friend_correct.reduce(function(a,b) {return a + b}));

            correct_paf.push(data.phone_a_friend_correct.filter(x => x == 1).length/data.phone_a_friend_correct.length);

            all_three_graph_generate(x_axis, correct_ata, correct_ff, correct_paf, div1);

            };

        });

    };

};


// Graph Function for lost money
// Graph Function for lost money
// Graph Function for lost money
function lost_money_graph_generate(x, y, div) {

    let  trace = {
        histfunc: "sum",
        y: y,
        x: x,
        hovertemplate: '%{y} Contestants<extra></extra>',
        type: 'histogram',
        marker: {
            color: "#AAAAAA",
        },
      };

    let  data = [trace];

    let graph_layout = {
        title: {
            text: "Total Prize Money Lost",
            font: {
                color: "#AAAAAA",
                size: 20
            },
        },
        xaxis: {
            title: "Amount Lost",
            titlefont: {
                color: "#AAAAAA",
                size: 15
            },
            tickfont: {
            color: "#AAAAAA",
            size: 13
            },
            type: 'category',
            // tickmode: "array",
            // tickvals: [x],
            // ticktext: [z],
        },
        yaxis: {
            title: "# of Times Money Lost",
            titlefont: {
                color: "#AAAAAA",
                size: 15
            },
            tickfont: {
                color: "#AAAAAA",
                size: 13
            },
        },
        height: 500,
        width: 780,
        paper_bgcolor: "rgba(0,0,0,0)",
        plot_bgcolor: 'rgba(0,0,0,0)',
    };

    Plotly.newPlot(div, data, graph_layout);

};


// Graph Function for question distribution
// Graph Function for question distribution
// Graph Function for question distribution
function question_reached_graph_generate(x, y, z, div) {

    let trace = {
        x: x,
        y: y,
        // hovertemplate: 'Total Who Reached Question: %{y}, %{truncate((y/724).toFixed(4)*100, 2)}%<extra></extra>',
        hovertemplate: `Total Who Answered Correctly: %{y}<extra></extra>`,
        marker: {
            color: 'rgb(0,200,0)',
        },
        type: "scatter",
        name: "Total Who Answered Correctly"
    };

    let trace2 = {
        x: x,
        y: z,
        hovertemplate: 'Cumulative Total Who Walked Away/Lost: %{y}<extra></extra>',
        marker: {
            color: 'rgb(0,148,255)',
        },
        type: "scatter",
        name: "Cumulative Total Who Walked Away/Lost on Question"
    };

    let data_ata = [trace, trace2];

    let ata_graph_layout = {
        title: {
            text: "Total Questions Answered Correctly/Walked Away/Lost",
            font: {
                color: "#AAAAAA",
                size: 20
            },
        },
        xaxis: {
            title: "Question #",
            titlefont: {
                color: "#AAAAAA",
                size: 15
            },
            tickfont: {
            color: "#AAAAAA",
            size: 13
            },
            tickmode: "linear",
            tick0: 1,
            dtick: 1,
        },
        yaxis: {
            title: "# of Times Correct",
            titlefont: {
                color: "#AAAAAA",
                size: 15
            },
            tickfont: {
                color: "#AAAAAA",
                size: 13
            },
        },
        legend: {
            x: 0.1,
            y: -0.25,
            "orientation": "h",
            font: {
                size: 12,
                color: '#AAAAAA'
              },
        },
        // showgrid: false,
        // zeroline: false,
        height: 450,
        width: 780,
        paper_bgcolor: "rgba(0,0,0,0)",
        plot_bgcolor: 'rgba(0,0,0,0)',
    };


    Plotly.newPlot(div, data_ata, ata_graph_layout);

};


// Turned into gif due to uneven picture transistioning
// Dynamic Background Image Function
// $(function () {
//     let body = $('body');
//     let backgrounds = [
//       "url('static/js/images/moneytree_0.png')",
//       "url('static/js/images/moneytree_1.png')",
//       "url('static/js/images/moneytree_2.png')", 
//       "url('static/js/images/moneytree_3.png')"];
//     let current = 0;

//     function nextBackground() {
//         body.css(
//             'background',
//         backgrounds[current = ++current % backgrounds.length]);
//         body.css('background-size', '100% 50%');

//         setTimeout(nextBackground, 5000);
//     }
//     setTimeout(nextBackground, 5000);
//     body.css('background', backgrounds[0]);
//     body.css('background-size', '100% 50%');
// });




// FIRST PAGE FUNCTIONS
// FIRST PAGE FUNCTIONS
// FIRST PAGE FUNCTIONS
// FIRST PAGE FUNCTIONS
// FIRST PAGE FUNCTIONS

// Load Main Question Display  
function main_question_load() {

    landing_question = document.getElementById("landing_question");

    landing_question.innerHTML = "<h3>The More A Question is Worth, The Harder it Will Get</h3><p>Contestants provide a final answer (the orange answer) with a green answer indicating which of the 4 is correct.  The more a question is worth, the harder it will get like this one for $250,000.  This type of question is probably not something that most people would know.  This would become a common theme with questions the closer a contestant gets to the 15th and final question.</p> </br> <p>  </p> </br>";


    document.getElementById("landing_picture").innerHTML = "<img src=\'static/css/images/question_blank.png'\ height=\'350'\ width=\'1000'\>";

    setTimeout(function() {

        landing_question.innerHTML = "<h3>The More A Question is Worth, The Harder it Will Get</h3><p>Contestants provide a final answer (the orange answer) with a green answer indicating which of the 4 is correct.  The more a question is worth, the harder it will get like this one for $250,000.  This type of question is probably not something that most people would know.  This would become a common theme with questions the closer a contestant gets to the 15th and final question.</p><p>You have chosen B.  Is that your final answer?</p> </br>";

        document.getElementById("landing_picture").innerHTML = "<img src=\'static/css/images/question_orange.png'\ height=\'350'\ width=\'1000'\>";


    }, 15000);

    setTimeout(function() {

        landing_question.innerHTML = "<h3>The More A Question is Worth, The Harder it Will Get</h3><p>Contestants provide a final answer (the orange answer) with a green answer indicating which of the 4 is correct.  The more a question is worth, the harder it will get like this one for $250,000.  This type of question is probably not something that most people would know.  This would become a common theme with questions the closer a contestant gets to the 15th and final question.</p><p>You just won $250,000!</p> </br>";

        document.getElementById("landing_picture").innerHTML = "<img src=\'static/css/images/question_green.png'\ height=\'350'\ width=\'1000'\>";


    }, 20250);

    setTimeout(function() {

        landing_question.innerHTML = "<h3>The More A Question is Worth, The Harder it Will Get</h3><p>Contestants provide a final answer (the orange answer) with a green answer indicating which of the 4 is correct.  The more a question is worth, the harder it will get like this one for $250,000.  This type of question is probably not something that most people would know.  This would become a common theme with questions the closer a contestant gets to the 15th and final question.</p><p>You just won $250,000!</p> </br>";

        document.getElementById("landing_picture").innerHTML = "<img src=\'static/css/images/question_orange.png'\ height=\'350'\ width=\'1000'\>";


    }, 20500);

    setTimeout(function() {

        landing_question.innerHTML = "<h3>The More A Question is Worth, The Harder it Will Get</h3><p>Contestants provide a final answer (the orange answer) with a green answer indicating which of the 4 is correct.  The more a question is worth, the harder it will get like this one for $250,000.  This type of question is probably not something that most people would know.  This would become a common theme with questions the closer a contestant gets to the 15th and final question.</p><p>You just won $250,000!</p> </br>";

        document.getElementById("landing_picture").innerHTML = "<img src=\'static/css/images/question_green.png'\ height=\'350'\ width=\'1000'\>";


    }, 20750);

    setTimeout(function() {

        landing_question.innerHTML = "<h3>The More A Question is Worth, The Harder it Will Get</h3><p>Contestants provide a final answer (the orange answer) with a green answer indicating which of the 4 is correct.  The more a question is worth, the harder it will get like this one for $250,000.  This type of question is probably not something that most people would know.  This would become a common theme with questions the closer a contestant gets to the 15th and final question.</p><p>You just won $250,000!</p> </br>";

        document.getElementById("landing_picture").innerHTML = "<img src=\'static/css/images/question_orange.png'\ height=\'350'\ width=\'1000'\>";


    }, 21000);

    setTimeout(function() {

        landing_question.innerHTML = "<h3>The More A Question is Worth, The Harder it Will Get</h3><p>Contestants provide a final answer (the orange answer) with a green answer indicating which of the 4 is correct.  The more a question is worth, the harder it will get like this one for $250,000.  This type of question is probably not something that most people would know.  This would become a common theme with questions the closer a contestant gets to the 15th and final question.</p><p>You just won $250,000!</p> </br>";

        document.getElementById("landing_picture").innerHTML = "<img src=\'static/css/images/question_green.png'\ height=\'350'\ width=\'1000'\>";


    }, 21250);

    setTimeout(function() {

        landing_question.innerHTML = "<h3>The More A Question is Worth, The Harder it Will Get</h3><p>Contestants provide a final answer (the orange answer) with a green answer indicating which of the 4 is correct.  The more a question is worth, the harder it will get like this one for $250,000.  This type of question is probably not something that most people would know.  This would become a common theme with questions the closer a contestant gets to the 15th and final question.</p><p>You just won $250,000!</p> </br>";

        document.getElementById("landing_picture").innerHTML = "<img src=\'static/css/images/question_orange.png'\ height=\'350'\ width=\'1000'\>";


    }, 21500);

    setTimeout(function() {

        landing_question.innerHTML = "<h3>The More A Question is Worth, The Harder it Will Get</h3><p>Contestants provide a final answer (the orange answer) with a green answer indicating which of the 4 is correct.  The more a question is worth, the harder it will get like this one for $250,000.  This type of question is probably not something that most people would know.  This would become a common theme with questions the closer a contestant gets to the 15th and final question.</p><p>You just won $250,000!</p> </br>";

        document.getElementById("landing_picture").innerHTML = "<img src=\'static/css/images/question_green.png'\ height=\'350'\ width=\'1000'\>";


    }, 21750);
};

// Load FF Question Display
function ff_question_load() {
    let ff_question = document.getElementById("ff_question");

    ff_question.innerHTML = "<img src=\'static/js/images/ff_question1.png'\ height=\'300'\ width=\'600'\>";
};

// Load Bad Question Display 
function bad_question_load() {

    let bad_game_question = document.getElementById("bad_game_question");


    bad_game_question.innerHTML = "<p>You have chosen D.  Is that your final answer?</p><img src=\'static/js/images/bad_question.png'\ height=\'350'\ width=\'1000'\> </br>";

    setTimeout(function () {
        
        bad_game_question.innerHTML = "<p>I'm sorry but the answer is C.</p><img src=\'static/js/images/bad_question_wrong.png'\ height=\'350'\ width=\'1000'\> </br>";

    }, 5000);

    setTimeout(function () {
        
    bad_game_question.innerHTML = "<p>I'm sorry but the answer is C.</p><img src=\'static/js/images/bad_question.png'\ height=\'350'\ width=\'1000'\> </br>";

    }, 5250);

    setTimeout(function () {
        
        bad_game_question.innerHTML = "<p>I'm sorry but the answer is C.</p><img src=\'static/js/images/bad_question_wrong.png'\ height=\'350'\ width=\'1000'\> </br>";

    }, 5500);

    setTimeout(function () {
        
    bad_game_question.innerHTML = "<p>I'm sorry but the answer is C.</p><img src=\'static/js/images/bad_question.png'\ height=\'350'\ width=\'1000'\> </br>";

    }, 5750);

    setTimeout(function () {
        
        bad_game_question.innerHTML = "<p>I'm sorry but the answer is C.</p><img src=\'static/js/images/bad_question_wrong.png'\ height=\'350'\ width=\'1000'\> </br>";

    }, 6000);

    setTimeout(function () {
        
        bad_game_question.innerHTML = "<p>I'm sorry but the answer is C.</p><img src=\'static/js/images/bad_question.png'\ height=\'350'\ width=\'1000'\> </br>";

    }, 6250);

    setTimeout(function () {
        
        bad_game_question.innerHTML = "<p>I'm sorry but the answer is C.</p><img src=\'static/js/images/bad_question_wrong.png'\ height=\'350'\ width=\'1000'\> </br>";

    }, 6500);

    setTimeout(function () {
        
        bad_game_question.innerHTML = "<p>I'm sorry but the answer is C.</p><img src=\'static/js/images/bad_question.png'\ height=\'350'\ width=\'1000'\> </br>";

    }, 6750);

    setTimeout(function () {
        
        bad_game_question.innerHTML = "<p>I'm sorry but the answer is C.</p><img src=\'static/js/images/bad_question_wrong.png'\ height=\'350'\ width=\'1000'\> </br>";

    }, 7000);

};

// Initialize Everthing Else Page 1
function initialize_first_page() {

    d3.json("/default_data", function(error, data) {
        if (error) return console.warn(error);


        // Logo text goes here.
        // $("#landing_top_text").text("Logo goes here.");

        let landing_top = document.getElementById("landing_top");

        landing_top.innerHTML = "<img src=\'static/js/images/Millionaire_logo.gif'\ height=\'500'\ width=\'500'\>";


        // Define arrays to call within their specific functions
        var ff_array = data.fastest_finger_time;
        var money_array = data.prize_money;
        var ata_array = data.ask_the_audience;
        var bad_array = data.bad_question;


        // Game Count Initialize pg 1
        function Game_count_query() {

            let game_counter = ata_array;
            game_counter = game_counter.filter(ask_the_audience => ask_the_audience < 2);
            

            $("#landing_summary_text").text("Who Wants To Be A Millionaire First Season Statistical Overview!");


            // Numbers go here.
            $("#total_seat_number").text(`Who wants to be a millionaire is an international gameshow with a simple premise:  Answer 15 questions correctly and win $1,000,000!  Despite the simple concept, the strategy to win the ultimate prize runs quite deep.  Each contestant is given 3 lifelines to help them out: Ask the Audience, 50 : 50 and Phone a Friend.`);
            $("#full_game_number").text(`Data has been collected from ${money_array.length} total runs to a million from the first U.S.A. season with ${game_counter.length} having complete lifeline data.  Over the course of the show, many things were always assumed regarding lifeline statistics:  Does the audience accuracy go down during the last 5 questions? Is phone a friend the most reliable lifeline?  These are the questions and more that will finally be answered!`);
            

        };
        Game_count_query();

        // Fastest Finger Initialize pg 1
        function Fastest_finger_query() {

            ff_filter = ff_array.filter(time => time != 0);

            let ff_sum = ff_filter.reduce(function(a,b) {return a + b});
            let ff_avg = ff_sum / ff_filter.length;

            let ff_max = Math.max.apply(Math, ff_filter);
            let ff_min = Math.min.apply(Math, ff_filter)


            $("#landing_ff_text").text("Fastest Finger question - The First Challenge");
            $("#ff_statistics").text("Before a contestant can get to the hot seat and make a run for the million, they must first be the quickest to answer the Fastest Finger question.  Here, 10 contestants are given 20 seconds to answer the question with both the fastest time and correct answer to make it to the next step of the game.")
            // $("#ff_statistics").text(`Average Fastest Finger Time: ${ff_avg.toFixed(2)} seconds.`);
            $("#ff_min").text(`As if the run to a million was not challenging enough, contestants had to be very quick with the fastest finger question to even have a shot at the hot seat.  You would have to hope to beat out the average time of ${ff_avg.toFixed(2)} seconds to have a shot.  While few contestants got it right while taking the max time of ${ff_max.toFixed(2)} seconds, the fastest ever recorded time was ${ff_min.toFixed(2)} seconds!`);
            $("#ff_max").text("Here is an example used for the Fastest Finger question with the correct order being ACBD.");
            // $("#ff_min").text(`Fastest Show Time: ${ff_min.toFixed(2)} seconds.`);
            // $("#ff_max").text(`Slowest Show Time: ${ff_max.toFixed(2)} seconds.`);


            // FF Graph -> Use the if statement to get around DOM missing error
            if ( $("#ff_graph").length > 0) {
                let ff_graph_data = {
                    x: ff_filter,
                    type: 'histogram',
                    hovertemplate: `%{y} Contestants<extra></extra>`,
                    marker: {
                        color: '#AAAAAA',
                        },
                    };

                let ff_graph_data_array = [ff_graph_data];

                let ff_graph_layout = {
                    title: {
                        text: "Fastest Finger Question Times",
                        font: {
                            color: "#AAAAAA",
                            size: 20
                            },
                        },
                        xaxis: {
                        title: "Seconds",
                        titlefont: {
                            color: "#AAAAAA",
                            size: 15
                        },
                        tickfont: {
                        color: "#AAAAAA",
                        size: 13
                            },
                        },
                        yaxis: {
                            title: "# of Contestants",
                            titlefont: {
                            color: "#AAAAAA",
                            size: 15
                        },
                        tickfont: {
                            color: "#AAAAAA",
                            size: 13
                            },
                        },
                        height: 700,
                        width: 500,
                        paper_bgcolor: "rgba(0,0,0,0)",
                        plot_bgcolor: 'rgba(0,0,0,0)',
                    };

        Plotly.newPlot('ff_graph', ff_graph_data_array, ff_graph_layout);
            };

        }; Fastest_finger_query();


        // Bad Question Initialize pg 1
        function Bad_question_query() {

            let bad_question = bad_array.filter(bad_question => bad_question > 0);

            $("#landing_bad_text").text("Some Games End On A Bad Question");
            d3.select("#bad_game_number").text(`Rarely, a question made have no right or wrong answer, yet contestants are required to give one!  Over the course of the first season, only ${bad_question.length} contestants fell victim to a bad question like this one which was only question 9 for $16,000 (which has no correct answer). 
            Thankfully, the contestant whos game ended with this question (by choosing C with the 'correct' answer being D) was invited back.  The producers of the show were usually very lenient on bringing back contestants that fell victim to a bad, poorly worded or ambiguous question."`);


        };
        Bad_question_query();
    });
};





// PUT ALL FIRST PAGE FUNCTIONS HERE
// PUT ALL FIRST PAGE FUNCTIONS HERE
// PUT ALL FIRST PAGE FUNCTIONS HERE
// PUT ALL FIRST PAGE FUNCTIONS HERE
// PUT ALL FIRST PAGE FUNCTIONS HERE
function index_page_load() {

    main_question_load();
    setInterval(main_question_load, 22000);
    ff_question_load();
    initialize_first_page();
    bad_question_load();
    setInterval(bad_question_load, 7250);

};



// SECOND PAGE FUNCTIONS
// SECOND PAGE FUNCTIONS
// SECOND PAGE FUNCTIONS
// SECOND PAGE FUNCTIONS
// SECOND PAGE FUNCTIONS

// Generate dropdown for outcome question statistics pg 2
function outcome_dropdown() {
    d3.json("/ask_the_audience_list", function(error, data) {
        if (error) return console.warn(error);

        let selector = d3.select("#lost_select");

        selector.append("option").text("Question #").property("value", 0);

        data.forEach((question) => {
        selector.append("option").text(`Question ${question}`).property("value", question);
        });
    });
};

// Get data for outcome table
function lost_option(different_selection) {
    d3.json("/total_losses/"+different_selection, function(error, data) {
        if (error) console.warn(error);

        if (different_selection == 0) {
            return;
        };

        let total_per_question = data.constestant_outcome.length;
        let walked = data.constestant_outcome.filter(constestant_outcome => constestant_outcome == "walked").length;
        let lost = data.constestant_outcome.filter(constestant_outcome => constestant_outcome == "wrong").length;

        d3.json("/total_losses", function(error, data) {
            if (error) console.warn(error);

            let total = data.constestant_outcome.length;

            let win = data.lost_on_question.filter(lost_on_question => lost_on_question == 16).length;

            let counter = data.lost_on_question.filter(lost_on_question => lost_on_question < different_selection).length;
            
            total = total - counter;

            if (different_selection == 15) {

                outcome_question_table_final(different_selection, total, total_per_question, win, lost, truncate((win/total_per_question).toFixed(4)*100, 2), truncate((lost/total_per_question).toFixed(4)*100, 2), "lost_button_data");
            }

            else {
                outcome_question_table(different_selection, total, total_per_question, walked, lost, truncate((walked/total_per_question).toFixed(4)*100, 2), truncate((lost/total_per_question).toFixed(4)*100, 2), "lost_button_data");
    
            }

        });

    });
};

// Set blank outcome table on page load
// ADD QUESTION VALUE IN ARRAY
function outcome_table_init() {
    outcome_question_table("#", "#", "#", "#", "#", "", "", "lost_button_data");
};


// Lost Money, Game Outcome Initialize pg2
function Lost_money_query() {
    d3.json("/lost_values_list", function(error, data) {
        if (error) console.warn(error);

        let loss_values = data;

        d3.json("/total_losses", function(error, data) {
            if (error) return console.warn(error);
    
                        
            let lost_money_array = data.money_lost;
            let outcome = data.constestant_outcome;
            
            let lost_money = lost_money_array.reduce(function(a,b) {return a + b});
            let nonzero_lost = lost_money_array.filter(lost_money => lost_money > 0);
            
            let most_frequent_amount_lost = mode(nonzero_lost);

    
            $("#money_lost_text").text("Many Contestants Took The Risk To Make it to the Next Question.");
            $("#money_lost_total").text(`However, many gambles did not pay off.   ${nonzero_lost.length} contestants lost $${lost_money.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} over the course of the first season.   The most common loss amount was $${most_frequent_amount_lost.mode.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} with $15,000 and $93,000 behind it.  Not chump change to lose out on even while taking taxation into consideration.  No contestants lost the maximum amount possible of $468,000 as none of the 31 contestants that made it to the final question answered it incorrectly.  They either walked away or won the million dollar prize.`);
            
            
            // $("#money_lost_mf").text(`Most frequent amount lost: .`);


            // Keep to figure out currecy formatting on the xticks
            // let loss_x = [2,3,4,5,7,8,9,10,11,12,13,14];
            // let loss_x = ["$100", "$200", "$300", "$500", "$1000", "$3000", "$7000", "$15,000", "$32,000", "$93,000", "$218,000"];
            // loss_values = loss_values.replace(/\d(?=(\d{3})+\.)/g, '$&,');
            
            let loss_y = [];


            for (let i = 0; i < loss_values.length; i++) {

                loss_y.push(data.money_lost.filter(money_lost => money_lost == loss_values[i]).length);
                
            };

            lost_money_graph_generate(loss_values, loss_y, "loss_graph");

            // Win, Loss, Walk Initialize
            let most_frequent_outcome = mode(outcome);  // Walked is mode
            let loss_outcome = data.constestant_outcome.filter(constestant_outcome => constestant_outcome == "wrong").length;
            let win_outcome = data.constestant_outcome.filter(constestant_outcome => constestant_outcome == "won").length;
    
                    
            $("#lost_why_text").text("Most Constestants Ultimately Choose to Walk Away");
            $("#lost_why_most_common").text(`Over the course of ${outcome.length} runs with data for contestant outcomes, the most frequent game outcome was to walk away at ${truncate((most_frequent_outcome.frequency/outcome.length).toFixed(4)*100, 2)}% of games played while ${truncate((loss_outcome/outcome.length).toFixed(4)*100, 2)}% of contestants ultimately lost with only ${truncate((win_outcome/outcome.length).toFixed(4)*100, 2)}% winning the million dollar prize.`);
    
        });

    })
};


// Initialize Everything Else for Page 2
function initialize_page_two() {

    d3.json("/default_data", function(error, data) {
        if (error) return console.warn(error);

        // Define arrays to call within their specific functions
        let question_array = data.questions_answered.filter(questions_answered => questions_answered > 0);
        let question_mode = mode(question_array);

        let contestant_prize_money_array = [
            [0, 16], 
            [1000, 207],
            [4000, 2],
            [8000, 14],
            [16000, 70],
            [32000, 247],
            [64000, 124],
            [125000, 156],
            [250000, 75],
            [500000, 22],
            [1000000, 9]
    ];

        let question_five = question_array.filter(questions_answered => questions_answered > 4);
        let question_ten = question_array.filter(questions_answered => questions_answered > 9);
        let question_eleven = question_array.filter(questions_answered => questions_answered > 10);
        let question_twelve = question_array.filter(questions_answered => questions_answered > 11);
        let question_thirteen = question_array.filter(questions_answered => questions_answered > 12);

        $("#overview_question_text").text("Most Contestants Got Quite Far and Won a Lot of Money.");
        $("#question_five").text("Though the format was tough to make the run to the million, 2 checkpoints helped ensure contestants would not walk away with nothing.  Contestants who answered the 5th question correctly were guaranteed to walk away with at least $1000 while any who answered the 10th question correctly were guaranteed a total of at least $32,000.  Contestants could go further but would lose money on any question they answered incorrectly after question 6 or 11.  Since question 6 and 11 were right after the checkpoint, contestants had nothing to lose by guessing if they were not sure which possible answer was correct.");
        $("#question_ten").text(`As such, ${truncate((question_five.length/question_array.length).toFixed(4)*100, 2)}% made it to the question 5 checkpoint and a further ${truncate((question_ten.length/question_array.length).toFixed(4)*100, 2)}% made it to the question 10 checkpoint.  Quite impressive to see 3 out of every 4 contestants make it to the $32,000 paycheck. `);
        $("#prize_money_common").text(`The graph below showcases that a majority of contestants (${truncate((question_eleven.length/question_array.length).toFixed(4)*100, 2)}%) made it all the way to question 11 before either walking away or losing outright as the cumulative total who reached question 12 is less than those who lost or walked away for this first time on the graph.  This trend continues for question 12 – 15 (${truncate((question_twelve.length/question_array.length).toFixed(4)*100, 2)}% at question 12, ${truncate((question_thirteen.length/question_array.length).toFixed(4)*100, 2)}% at question 13 and so on).`);

        let question_total = [];
        let question_wrong = [];

        let x_axis = Array.from({length: 15}, (v, k) => k+1);

        for (let i = 0; i < 16; i++) {
    
            question_total.push((data.questions_answered.filter(questions_answered => questions_answered > i)).length);

            d3.json("/hot_seat_question", function(error, data) {
                if (error) console.warn(error);

                question_wrong.push((data.questions_answered.filter(questions_answered => questions_answered <= i).length));

                question_reached_graph_generate(x_axis, question_total, question_wrong, question_distribution);

            });
        };
    });
};



// PUT ALL SECOND PAGE FUNCTIONS HERE
// PUT ALL SECOND PAGE FUNCTIONS HERE
// PUT ALL SECOND PAGE FUNCTIONS HERE
// PUT ALL SECOND PAGE FUNCTIONS HERE
// PUT ALL SECOND PAGE FUNCTIONS HERE

function overview_page_load(){

    initialize_page_two();
    outcome_dropdown();
    outcome_table_init();
    Lost_money_query();
    
};




// ASK THE AUDIENCE FUNCTIONS FOR PG 3
// ASK THE AUDIENCE FUNCTIONS FOR PG 3
// ASK THE AUDIENCE FUNCTIONS FOR PG 3
// ASK THE AUDIENCE FUNCTIONS FOR PG 3
// ASK THE AUDIENCE FUNCTIONS FOR PG 3

// Ask The Audience Top pg 3
function ata_general_info() {
    d3.json("/lifeline_data", function(error, data) {
        if (error) return console.warn(error);


        // ATA variables
        let total_contestants = data.ask_the_audience.length;
        full_contenstant_number = data.ask_the_audience.length;
        let ata_used = data.ask_the_audience.filter(ask_the_audience => ask_the_audience > 0);
        let audience_percentage = data.ask_the_audience_correct.filter(ask_the_audience_correct => ask_the_audience_correct == 1);

        // 443 used ask the audience


        // ATA Text
        $("#ata_text").text("Ask The Audience Statistical Overview");
        $("#ata_percent").text("Ask the audience was usually the first lifeline contestants would use when facing a question they were uncertain about.  Taking a simple straw poll of the audience opinions of the possible answers for a question would prove to be perhaps the most reliable of all 3 lifelines.  Host Regis Philbin even boasted that the audience was right 95% of the time!  Is that really the case?  Let’s take a look!");
        $("#ata_correct").text(`While not quite up to Regis Philbin’s high standards, the audience poll provided the correct answer a staggering ${truncate(((audience_percentage.length/ata_used.length).toFixed(4)*100), 2)}% of time.  Pretty solid numbers considering a whoping ${truncate(((ata_used.length/total_contestants).toFixed(4)*100), 2)}% of contestants opted to ask the audience. `);

        document.getElementById("ata_percent_graphic").innerHTML = "<img src=\'static/js/images/download.jpg'\ height=\'300'\ width=\'200'\>";

    });
};

// Ask The Audience When Correct Data pg 3  
function ata_when_correct() {
    d3.json("/ask_the_audience", function(error, data) {
        if (error) return console.warning(error);

        let total_percentage = data.ask_the_audience_percentage.reduce(function(a,b) {return a + b});

        $("#ata_percent_correct").text(`Further more, the average winning score for the correct answer (like in the graph to the right) was ${truncate((total_percentage/(data.ask_the_audience.length)).toFixed(4), 2)}%.  Seems like it was usually a solid option to seek out the audience opinion when uncertain.`);
    });
}; 

// Generate dropdown for ata question statistics pg 3
function ata_dropdown() {
    d3.json("/ask_the_audience_list", function(error, data) {
        if (error) return console.warn(error);

        let selector = d3.select("#ata_select");

        selector.append("option").text("Question #").property("value", 0);

        data.forEach((question) => {
        selector.append("option").text(`Question ${question}`).property("value", question);
        });
    });
};

// Set up Ata Question Text On Page Load
function ask_the_audience_question_text_init() {
    ata_question_table("#", "#", "#", "#", "", "", "", "ata_button_data");
};

// Queue Ata Graphic 
function ata_graphic() {
    let ata_picture = document.getElementById("ata_graphic");


    ata_picture.innerHTML = "<p>Ask The Audience Icon</p> </br> <img src=\'static/js/images/ata_graphic.png'\ height=\'150'\ width=\'200'\>";

    setTimeout(function () {
        
        ata_picture.innerHTML = "<p>Ask The Audience While In Action</p> </br> <img src=\'static/js/images/ata_in_use.png'\ height=\'150'\ width=\'200'\>";

      }, 4000);

    setTimeout(function () {
        
        ata_picture.innerHTML = "<p>Ask The Audience Once Used</p> </br> <img src=\'static/js/images/ata_gone.png'\ height=\'150'\ width=\'200'\>";

      }, 8000);
};

// Produce data when ask the audience question is selected
function ata_option(different_selection) {
    d3.json("/ask_the_audience_question_used/"+different_selection, function(error, data) {
        if (error) return console.warn(error);

        if (different_selection == 0) {
            return;
        };

        let total = data.ask_the_audience_correct.length;
        let total_ata_correct = data.ask_the_audience_correct.filter(ask_the_audience_correct => ask_the_audience_correct == 1).length;


        d3.json("/ask_the_audience_question_used_percent/"+different_selection, function(error, data) {
            if (error) return console.warn(error);

            let total_ata_correct_percentage = data.ask_the_audience_percentage.reduce(function(a,b) {return a + b});
            let total_at_question = data.ask_the_audience_percentage.length;

            ata_question_table(different_selection, total, total_ata_correct, (total - total_ata_correct), truncate((total/443).toFixed(4)*100, 2), truncate((total_ata_correct/total).toFixed(4)*100, 2), truncate((total_ata_correct_percentage/total_at_question).toFixed(4), 2), "ata_button_data");

        });
                                
    });
};

// Initiate Text for Ata Graphs
function ata_when_correct_tiers() {
   
    d3.select("#ata_table_title").text("How Do the Beginning, Middle and Late Questions Stack Up While Using the Ask the Audience Lifeline?");
    d3.select(".ata_table_text").append("p").text("Interesting to see that what many contestants said regarding ask the audience being correct: As the questions get harder, they become unreliable.  This is very apparent in question 13, 14 and 15 (usually the hardest of the lot) however, the data for questions before this is still quite solid.  The audience still produced the correct answer in over 75% of runs at question 12 (worth $125,000) with an average winning score over 65%.  This would indicate it would be smart to try and hold on to the lifeline as late as possible. ");

};

// Grab data for arrays regarding each question
function ata_individual_question_data () {

    let count_array = [];
    let correct_array = [];
    let correct_percent = [];
    let x_axis = Array.from({length: 15}, (v, k) => k+1);

    for (i = 1; i < 16; i++) {
        d3.json(`ask_the_audience_question_used/${i}`, function(error, data) {
            if (error) console.warn(error);

            count_array.push(data.ask_the_audience.reduce(function(a,b) {return a + b}));

            correct_array.push(data.ask_the_audience_correct.filter(x => x == 1)                     .length/data.ask_the_audience_correct.length);

            ata_count_graph_generate(x_axis, count_array, "ata_table_count");
            // ata_correct_graph_generate(x_axis, correct_array, "ata_table");

        });

        d3.json(`ask_the_audience_question_used_percent/${i}`, function(error, data) {
            if (error) console.warn(error);

            let ata_total_graph = data.ask_the_audience_percentage.length;

            correct_percent.push((data.ask_the_audience_percentage.reduce(function(a,b) {return a + b})/(ata_total_graph*100)));

            ata_percent_graph_generate(x_axis, correct_array, correct_percent, "ata_table");
        });
    };

};

// ATA compared with other lifelines
function ata_all_graph() {

    d3.select("#ata_compare_title").text("How Does The Audience Stack Up Against the Other Lifelines?");
    d3.select("#ata_compare_text").append("p").text("Crazy to see that ask the audience being the most consistently reliable out of all 3 lifelines.  Its use would repeatedly get questioned by contestants as the game went on but the data clearly shows it produces the best result only being beat out by phone a friend on question 14 and 50:50 on questions 3, 10 and 11. ");


    all_three_graph_data("ata_compare_table");

};


// Put all Ask The Audience Related Data into This Function
// Put all Ask The Audience Related Data into This Function
// Put all Ask The Audience Related Data into This Function
// Put all Ask The Audience Related Data into This Function
// Put all Ask The Audience Related Data into This Function

function ata_page_load() {

    ata_general_info();
    ata_when_correct();
    ata_dropdown();
    ask_the_audience_question_text_init();
    ata_graphic();
    setInterval(ata_graphic, 12000);
    ata_when_correct_tiers();
    ata_individual_question_data();
    ata_all_graph();

};



// 50:50 FUNCTION PG 4
// 50:50 FUNCTION PG 4
// 50:50 FUNCTION PG 4
// 50:50 FUNCTION PG 4
// 50:50 FUNCTION PG 4

// 50:50 General Info Top pg 4
function ff_general_info() {
    d3.json("/lifeline_data", function(error, data) {
        if (error) return console.warn(error);

        let total_contestants = data.ask_the_audience.length;
        full_contenstant_number = data.ask_the_audience.length;
        let ff_used = data.fifty_fifty.filter(fifty_fifty => fifty_fifty > 0);
        let ff_percentage = data.fifty_fifty_correct.filter(fifty_fifty_correct => fifty_fifty_correct == 1);


        // 50:50 Text
        $("#ff_text").text("50 : 50 Statistical Overview");
        $("#ff_percent").text(`50 : 50 is perhaps the simplest of the lifelines to use: it eliminates 2 of the possible answers that were incorrect, leaving just the correct answer and the wrong answer, giving the contestant coin flip odds to get the question correct.  Its simple nature lead it to being used by ${truncate(((ff_used.length/total_contestants).toFixed(4)*100), 2)}% of contestants.`);
        $("#ff_correct").text(`When watching the show, I always seemed to recall the 50 : 50 lifeline working by the odds of its namesake.  However, it helped contestants get the correct answer and impressive ${truncate(((ff_percentage.length/ff_used.length).toFixed(4)*100), 2)}% of the time when used!`);

    });
};

// Generate dropdown for ff question statistics pg 4
function ff_dropdown() {
    d3.json("/fifty_fifty_list", function(error, data) {
        if (error) return console.warn(error);

        let selector = d3.select("#ff_select");

        selector.append("option").text("Question #").property("value", 0);

        data.forEach((question) => {
        selector.append("option").text(`Question ${question}`).property("value", question);
        });
    });
};

// Set up Ff Question Text On Page Load
function fifty_fifty_question_text_init() {
    ff_question_table("#", "#", "#", "#", "", "ff_button_data");
};

// 50:50 Graphic Initialization
function ff_graphic() {
    let ff_picture = document.getElementById("ff_graphic");


    ff_picture.innerHTML = "<p> 50 : 50 Icon</p> </br> <img src=\'static/js/images/5050_graphic.png'\ height=\'150'\ width=\'200'\>";

    setTimeout(function () {
        
        ff_picture.innerHTML = "<p> 50 : 50 Once Used</p> </br> <img src=\'static/js/images/5050_gone.png'\ height=\'150'\ width=\'200'\>";

      }, 4000);

};

// Produce data when 50:50 question is selected
function ff_option(different_selection) {
    d3.json("/fifty_fifty_question_used/"+different_selection, function(error, data) {
        if (error) return console.warn(error);

        if (different_selection == 0) {
            return;
        };

        let total = data.fifty_fifty_correct.length;
        let total_ff_correct = data.fifty_fifty_correct.filter(fifty_fifty_correct => fifty_fifty_correct == 1).length;

        ff_question_table(different_selection, total, total_ff_correct, total - total_ff_correct, truncate(((total_ff_correct/total).toFixed(4)*100), 2), "ff_button_data");
                                
    });
};

// Initiate Text for Ff Graphs
function ff_when_correct_tiers() {
   
    d3.select("#ff_table_title").text("How Do the Beginning, Middle and Late Questions Stack Up While Using the 50 : 50 Lifeline?");
    d3.select(".ff_table_text").append("p").text("50 : 50 was heavily used on questions 9 - 13.  It also helped produce the correct answer for questions 6 - 1- at around 80%.  Seems like a great lifeline to get to that $32,000 checkpoint.");
    d3.select(".ff_table_text").append("p").text("Its use was rather erratic over the first 5 questions (due to the small number of time it was used) and its effectiveness decreased over question 11-15.");

};

// Grab data for arrays regarding each question
function ff_individual_question_data () {

    let count_array = [];
    let correct_array = [];
    let x_axis = Array.from({length: 15}, (v, k) => k+1);

    for (i = 1; i < 16; i++) {
        d3.json(`fifty_fifty_question_used/${i}`, function(error, data) {
            if (error) console.warn(error);

            count_array.push(data.fifty_fifty.reduce(function(a,b) {return a + b}));

            correct_array.push(data.fifty_fifty_correct.filter(x => x == 1)                     .length/data.fifty_fifty_correct.length);

            ff_count_graph_generate(x_axis, count_array, "ff_table_count");
           
            ff_percent_graph_generate(x_axis, correct_array, "ff_table");

        });
    }; 
};

// FF compared with other lifelines
function ff_all_graph() {

    d3.select("#ff_compare_title").text("How Does 50 : 50 Stack Up Against the Other Lifelines?");
    d3.select("#ff_compare_text").append("p").text("While 50 : 50 does not seem to be as effective as ask the audience, it does hold its own overall when helping produce the correct answer at around 80% when used through question 11.  Its accuracy is about the same as the other 2 lifelines when used through the final 4 questions.");


    all_three_graph_data("ff_compare_table");

};


// Put all 50:50 Related Data into This Function
// Put all 50:50 Related Data into This Function
// Put all 50:50 Related Data into This Function
// Put all 50:50 Related Data into This Function
// Put all 50:50 Related Data into This Function
function ff_page_load() {

    ff_general_info();
    ff_dropdown();
    fifty_fifty_question_text_init();
    ff_graphic();
    setInterval(ff_graphic, 8000);
    ff_when_correct_tiers();
    ff_individual_question_data();
    ff_all_graph();


};



// PHONE A FRIEND FUNCTION PG 5
// PHONE A FRIEND FUNCTION PG 5
// PHONE A FRIEND FUNCTION PG 5
// PHONE A FRIEND FUNCTION PG 5
// PHONE A FRIEND FUNCTION PG 5

// Paf General Info
function paf_general_info() {
    d3.json("/lifeline_data", function(error, data) {
        if (error) return console.warn(error);

        let paf_timer = document.getElementById("paf_timer");


        paf_timer.innerHTML = "<p>Phone A Friend Countdown</p> </br> <img src=\'static/js/images/paf_countdown.gif'\ height=\'150'\ width=\'200'\>";


        // ATA variables
        let total_contestants = data.ask_the_audience.length;

        // Phone A Friend Variables
        let paf_used = data.phone_a_friend.filter(phone_a_friend => phone_a_friend > 0);
        let paf_percentage = data.phone_a_friend_correct.filter(phone_a_friend_correct => phone_a_friend_correct == 1);

        // Phone A Friend text
        $("#paf_text").text("Phone a Friend Statistical Overview");
        $("#paf_percent").text("Phone a friend is the most logistically complicated of the 3 lifelines.  While calling a preselected friend, a contestant is given 30 seconds to read the question, the 4 possible answers and hope that they can make a guess before the 30 second timer is up.");
        $("#paf_correct").text(`Given the hectic nature, it should not be surprising to see that only ${truncate(((paf_percentage.length/paf_used.length).toFixed(4)*100), 2)}% provided the correct answer.  Many of these correct responses by who was phoned were guesses though these guesses were often correct.  It was also the least used lifeline with ${truncate(((paf_used.length/total_contestants).toFixed(4)*100), 2)}% of contestants using it though this is due to it being held onto to use on later questions.`);
        $("#paf_both").text("The biggest trap compared to the other lifelines was many contestants often had an expert they could call regarding specific questions.  When called to action, these 'experts' would often be unable to provide any sort of answer before the 30 seconds was up!");
        // $("#paf_percent").text(`Percentage of Players to Phone A Friend: ${truncate(((paf_used.length/total_contestants).toFixed(4)*100), 2)}%`);
        // $("#paf_correct").text(`Phone A Friend that provided the correct answer: ${truncate(((paf_percentage.length/paf_used.length).toFixed(4)*100), 2)}%`);
                

    });
};

// Generate dropdown for paf question statistics pg 5
function paf_dropdown() {
    d3.json("/fifty_fifty_list", function(error, data) {
        if (error) return console.warn(error);

        let selector = d3.select("#paf_select");

        selector.append("option").text("Question #").property("value", 0);

        data.forEach((question) => {
        selector.append("option").text(`Question ${question}`).property("value", question);
        });
    });
};

// Set up paf Question Text On Page Load
function phone_a_friend_question_text_init() {
    paf_question_table("#", "#", "#", "#", "", "paf_button_data");
};

// Phone a Friend Graphic Initialization
function paf_graphic() {
    let paf_picture = document.getElementById("paf_graphic");


    paf_picture.innerHTML = "<p>Phone A Friend Icon</p> </br> <img src=\'static/js/images/paf_graphic.png'\ height=\'150'\ width=\'200'\>";

    setTimeout(function () {
        
    paf_picture.innerHTML = "<p>Phone A Friend Once Used</p> </br> <img src=\'static/js/images/paf_gone.png'\ height=\'150'\ width=\'200'\>";

    }, 4000);

};

// Produce data when Phone A Friend question is selected
function paf_option(different_selection) {
    d3.json("/phone_a_friend_question_used/"+different_selection, function(error, data) {
        if (error) return console.warn(error);

        if (different_selection == 0) {
            return;
        };

        let total = data.phone_a_friend_correct.length;
        let total_paf_correct = data.phone_a_friend_correct.filter(phone_a_friend_correct => phone_a_friend_correct == 1).length;

        paf_question_table(different_selection, total, total_paf_correct, total - total_paf_correct, (truncate(((total_paf_correct/total).toFixed(4)*100), 2)) || 0, "paf_button_data");
                                
    });
};

// Initiate Text for Paf Graphs
function paf_when_correct_tiers() {
   
    d3.select("#paf_table_title").text("How Do the Beginning, Middle and Late Questions Stack Up When Phoning a Phone?");
    d3.select(".paf_table_text").append("p").text("Phone a friend was notoriously unreliable due to many factors.  It was predominately used on questions 11 – 15 with its accuracy hovering around 50%.  It was especially unforgiving on question 15.  It was used there 9 times while only providing the correct answer twice. ");

};

// Grab data for arrays regarding each question
function paf_individual_question_data () {

    let count_array = [];
    let correct_array = [];
    let x_axis = Array.from({length: 15}, (v, k) => k+1);

    for (i = 1; i < 16; i++) {
        d3.json(`phone_a_friend_question_used/${i}`, function(error, data) {
            if (error) console.warn(error);

            if (data.phone_a_friend.length == 0) {
                count_array.push(0);
                correct_array.push(0);

                paf_count_graph_generate(x_axis, count_array, "paf_table_count");
           
                paf_percent_graph_generate(x_axis, correct_array, "paf_table");
            }

            else {
            count_array.push(data.phone_a_friend.reduce(function(a,b) {return a + b}));

            correct_array.push(data.phone_a_friend_correct.filter(x => x == 1)                     .length/data.phone_a_friend_correct.length);

            paf_count_graph_generate(x_axis, count_array, "paf_table_count");
           
            paf_percent_graph_generate(x_axis, correct_array, "paf_table");
            };

        });
    };
};

// Paf compared with other lifelines
function paf_all_graph() {

    d3.select("#paf_compare_title").text("How Does Phone A Friend Stack Up Against the Other Lifelines?");
    d3.select("#paf_compare_text").append("p").text("The compound nature of the phone a friend lifeline is on full display when compared to the other 2 lifelines.  While it was comparable to the other for the first 10 question, it was the most unreliable of the bunch over the last 5 questions. ");


    all_three_graph_data("paf_compare_table");

};


// Put all Phone A Friend Data into This Function
// Put all Phone A Friend Data into This Function
// Put all Phone A Friend Data into This Function
// Put all Phone A Friend Data into This Function
// Put all Phone A Friend Data into This Function
function paf_page_load() {

    paf_general_info();
    paf_dropdown();
    phone_a_friend_question_text_init();
    paf_graphic();
    setInterval(paf_graphic, 8000);
    paf_when_correct_tiers();
    paf_individual_question_data();
    paf_all_graph();
    
};






// Put all About Data into This Function
// Put all About Data into This Function
// Put all About Data into This Function
// Put all About Data into This Function
// Put all About Data into This Function
function about_page_load() {

    $("#about_title").text("About Me");

    $(".about_picture").append("<img class='about_pic' src=\'static/js/images/IMG_02599.jpg'\ height=\'300'\ width=\'225'\>");

    $(".about_text").append("<p>Who Wants To Be A Millionaire! was a show that had quite an impact on me as a child.  I remember first watching it during one of my summer trips back home as I was living overseas in Japan during its debut.  It quickly became something I had to watch every chance I got afterwards whenever I was back home.  The show was rarely in the news (unless a contestant won the million) so finding information or archives of games was extremely difficult especially with the internet being in its infancy during the late 90s/early 2000s.  This website is designed to give a comprehensive statistical overview of the 1st season of the U.S.A version of the game show.</p>");

    $(".about_text").append("<p>The data from the 1st season used for analysis was collected from <a href='https://millionaire.fandom.com' target='blank'>https://millionaire.fandom.com</a>.  All show data and pictures are copyright ABC (American Broadcasting Company) and all information is used for educational and statistical purposes with no copyright infringement intended.</p>");


};
