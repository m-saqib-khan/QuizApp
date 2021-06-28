function result() {

    var score = 0
    var rgtAnsQ1 = document.getElementById("q1_ans1")
    var q1Ans2 = document.getElementById("q1_ans2")
    var q1Ans3 = document.getElementById("q1_ans3")

    if (rgtAnsQ1.checked === true) {
        score++
        alert("Right Answer")
    } else {
        alert("wrong Answer")
    }



    var rgtAnsQ2 = document.getElementById("q2_ans1")
    var q2Ans2 = document.getElementById("q2_ans2")
    var q2Ans3 = document.getElementById("q2_ans3")

    if (rgtAnsQ2.checked === true) {
        score++
        alert("Right Answer")
    } else {
        alert("wrong Answer")
    }




    var rgtAnsQ3 = document.getElementById("q3_ans1")
    var q3Ans2 = document.getElementById("q3_ans2")
    var q3Ans3 = document.getElementById("q3_ans3")

    if (rgtAnsQ3.checked === true) {
        score++
        alert("Right Answer")
    } else {
        alert("wrong Answer")
    }




    var rgtAnsQ4 = document.getElementById("q4_ans1")
    var q4Ans2 = document.getElementById("q4_ans2")
    var q4Ans3 = document.getElementById("q4_ans3")

    if (rgtAnsQ4.checked === true) {
        score++
        alert("Right Answer")
    } else {
        alert("wrong Answer")
    }
    // window.location.href = `./submit.html?your score is=${score}`
    window.open(`./submit.html?${score}`, "_blank")
    // alert("Your Score Is = " + score++)
}


name1()


function name1() {
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    console.log(urlParams);
    var scores = document.getElementById("score")
    scores = document.write(urlParams)
}
