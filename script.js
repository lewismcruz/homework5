/*============================================================
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively




==============================================================*/

var a = moment().format('LLLL');
console.log(a);

var b = moment().format('MMMM Do [the great year of YYYY');
console.log(b);

var c = moment().format('MM DD YYYY');
console.log(c);

var currentDay;

var dailyevent;

var savedEvent;

var pastColorCodeEvent;

var presentColorCodeEvent;

var futureColorCodeEvent;






/*====================================================================
GIVEN I am using a daily planner to create a schedule





====================================================================

WHEN I open the planner


====================================================================
THEN the current day is displayed at the top of the calendar




====================================================================
WHEN I scroll down



====================================================================
THEN I am presented with timeblocks for standard business hours






====================================================================
WHEN I view the timeblocks for that day






====================================================================
THEN each timeblock is color coded to indicate whether it is in the past, present, or future








====================================================================
WHEN I click into a timeblock
click event






====================================================================
THEN I can enter an event




====================================================================
WHEN I click the save button for that timeblock





====================================================================
THEN the text for that event is saved in local storage








====================================================================
WHEN I refresh the page



====================================================================
THEN the saved events persist



