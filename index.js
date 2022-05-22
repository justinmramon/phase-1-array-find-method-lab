// code your solution here
function superbowlWin(record){
    for (const victory of record)
    if (victory.result === "W")
    return victory.year
}