window.addEventListener('load', init, false);

var canvas, stage, exportRoot, errorsound, correctsound, clicksound;
var numofanswer = 30;
var counter = 0;
var groupArray = [0, 0, 0, 0];
var placeIdArray = [0, 1, 2, 3];
var itemsnum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]


function init() {
    canvas = document.getElementById("canvas");
    exportRoot = new lib.taskobject();
    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);
    stage.update();
    createjs.Ticker.setFPS(24);
    createjs.Ticker.addEventListener("tick", stage);
    createjs.Touch.enable(stage);
    createjs.Ticker.setFPS(24);
    createjs.Ticker.addEventListener("tick", stage);

    
    // set the animation of the BG
    
    $("#bg1").animate({
        opacity: 0
    }, 1000, function() {
        $("#bg1").css("display", "none");
    });

    
    //set the sounds functions

    errorsound = document.getElementById("error");
    correctsound = document.getElementById("correct");
    clicksound = document.getElementById("click");
    errorsound.addEventListener('pause', function() {
        errorsound.currentTime = 0;
    }, false);
    correctsound.addEventListener('pause', function() {
        correctsound.currentTime = 0;
    }, false);

    clicksound.addEventListener('pause', function() {
        clicksound.currentTime = 0;
    }, false);

    s1 = document.getElementById("s1");
    s1.addEventListener('pause', function () {
        s1.currentTime = 0;
    }, false);
    
    // set the stage and hide non needed elements
    exportRoot["result"].alpha = 0;
    exportRoot["restart_button"].alpha = 0;

    setTimeout(function () {
        s1.play();
    }, 1000);

    // drag and drop events for 30 item 

    for (var i = 0; i < numofanswer; i++) {

        // set the drag event and give id to all items
        exportRoot["ans_" + i].onPress = moveFn;
        exportRoot["ans_" + i].num = i;

        // preserving the original position of the items
        exportRoot["ans_" + i].PosX = exportRoot["ans_" + i].x;
        exportRoot["ans_" + i].PosY = exportRoot["ans_" + i].y;

        // setting groups for each department and its counter and assign if the place is empty
        if (i < 4) {
            exportRoot["place_" + i].id = placeIdArray[i];
            exportRoot["counter_" + i].id = placeIdArray[i];
            exportRoot["place_" + i].amIChecked = false;
            
            //hide the four places wich count the departments
            exportRoot["counter_"+i].alpha = 0;
        }
    }


    // setting the drop events  function moveFn
    function moveFn(e) {
        //drop events
        e.target.disX = stage.mouseX - e.target.x;
        e.target.disY = stage.mouseY - e.target.y;
        
        e.onMouseMove = function(e1) {
            e1.target.x = e1.stageX - e1.target.disX;
            e1.target.y = e1.stageY - e1.target.disY;
        };


        e.onMouseUp = function(e2) {
            PauseAll();

            //check if the hit happened 
            for (var i = 0; i < 4; i++) {

                if (Math.abs(e2.target.x - exportRoot["place_" + i].x) < 50 && Math.abs(e2.target.y - exportRoot["place_" + i].y) < 50 && (exportRoot["place_" + i].amIChecked == false)) {
                    
                    /*
                    the values in the array itemnum is devided as following
                     madania      0-8
                     kahraba2ya   9-17
                     mechanica    18-22
                     electronia   23-29
                    */
                    
                    PauseAll();
                    correctsound.play();
                    exportRoot["place_" + i].gotoAndStop((e2.target.id + 1));
                    exportRoot["place_" + i].amIChecked = true;
                    
                    //return the answer to its orign position
                    createjs.Tween.get(e2.target, {
                        override: true
                    }).to({
                        x: e2.target.PosX,
                        y: e2.target.PosY
                    }, 0, createjs.Ease.easeOut);

                    //disable the draged item event and assign the clicks 
                    if (e2.target.id == 0) {
                        setTimeout(function() {
                            for (var l = 0; l <= 8; l++) {
                                exportRoot["ans_" + l].onPress = null;

                                // add click event for this department
                                exportRoot["ans_" + l].onClick = function(event) {
                                    clickFn(exportRoot["place_" + i].id, event);
                                };

                            }
                        }, 100)


                    } else if (e2.target.id == 1) {
                        setTimeout(function() {

                            for (var l = 9; l <= 17; l++) {
                                exportRoot["ans_" + l].onPress = null;
                                // add click event for this department
                                exportRoot["ans_" + l].onClick = function(event) {
                                    clickFn(exportRoot["place_" + i].id, event);
                                };
                            }
                        }, 100);

                    } else if (e2.target.id == 3) {
                        setTimeout(function() {

                            for (var l = 18; l <= 22; l++) {

                                exportRoot["ans_" + l].onPress = null;
                                // add click event for this department
                                exportRoot["ans_" + l].onClick = function(event) {
                                    clickFn(exportRoot["place_" + i].id, event);
                                };
                            }
                        }, 100);

                    } else if (e2.target.id == 2) {
                        setTimeout(function() {

                            for (var l = 23; l <= 29; l++) {
                                exportRoot["ans_" + l].onPress = null;
                                // add click event for this department
                                exportRoot["ans_" + l].onClick = function(event) {
                                    clickFn(exportRoot["place_" + i].id, event);
                                };
                            }
                        }, 100)

                    }

                    //break the loop if true
                    break;
                } else {
                    // if the hit diddn't happened
                    PauseAll();
                    errorsound.play();
                    createjs.Tween.get(e2.target, {
                        override: true
                    }).to({
                        x: e2.target.PosX,
                        y: e2.target.PosY
                    }, 800, createjs.Ease.easeOut);
                }
            }




        }


    }


    // setting the clickFn 

    function clickFn(placeId, item) {
        PauseAll();
        clicksound.play();
        counter++;
        
        //connect the department with all its type with its drop target place and the counter cell
        exportRoot["counter_" + placeId].alpha = 1;
        exportRoot["counter_" + placeId].gotoAndStop(groupArray[item.target.id]);
        groupArray[item.target.id]++;
        exportRoot["ans_" + item.target.num].gotoAndStop(1);
        exportRoot["ans_" + item.target.num].onClick = null;

        // check if the table are fully checked 
        if (counter == 30) {
            exportRoot["result"].alpha = 1;
            setTimeout(function() {
                correctsound.play();
                createjs.Tween.get(exportRoot["restart_button"], {
                    override: true
                }).to({
                    alpha: 1
                }, 800, createjs.Ease.linear);

                exportRoot["restart_button"].onClick = restart;


            }, 500)
        }
    }
    
// set all the stage from the beginning 
    function restart() {
        console.log("hello");
        counter = 0;
        groupArray = [0, 0, 0, 0];

        exportRoot["restart_button"].alpha = 0;
        exportRoot["result"].alpha = 0;

        for (var i = 0; i < numofanswer; i++) {

            exportRoot["ans_" + i].onPress = moveFn;
            exportRoot["ans_" + i].gotoAndStop(0);
            exportRoot["ans_" + i].PosX = exportRoot["ans_" + i].x;
            exportRoot["ans_" + i].PosY = exportRoot["ans_" + i].y;
            if (i < 4) {
                exportRoot["place_" + i].gotoAndStop(0);
                exportRoot["counter_" + i].gotoAndStop(0);
                exportRoot["counter_" + i].alpha = 0;
                exportRoot["place_" + i].amIChecked = false;
                exportRoot["place_" + i].id = placeIdArray[i];
                exportRoot["counter_" + i].id = placeIdArray[i];
            }
        }
    }

    // pause function for the sounds
    function PauseAll() {
        errorsound.pause();
        correctsound.pause();
        clicksound.pause();
        s1.pause();
    }


}