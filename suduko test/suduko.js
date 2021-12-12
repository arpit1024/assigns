function getSuduko(board)
{
function checkValid(board,row,col,val){
  for (let i=0;i<9;i++){
            if (board[row][i] == val) return false;
        }
  for (let i = 0;i<9;i++){
            if (board[i][col] == val) return false;
        }
   var r = row- row % 3;
   var c = col-col % 3;
    
    for (let i=0;i<3;i++){
        for (let j=0;j<3;j++){
            if (board[r + i][j + c] == val) return false;
        }
    }
    return true;
}
 function display(board){
      
    for(let i=0; i<board.length; i++)
    {
        let str =''
        for(let j=0; j<board.length; j++)
        {
            str += board[i][j] + " " 
        }
        console.log(str)
    }
 }
 var flag = false;
function solve(board,row,col){
    if (row == board.length){ 
        flag = true;
        return;
    }
   var next_row = 0; 
   var next_col = 0;
    if (col == board.length-1){ 
        next_row = row + 1;
        next_col = 0;
    }else{ 
        next_row = row;
        next_col = col + 1;
    }
    if (board[row][col] != 0){
        solve(board,next_row,next_col);
    }else{
        for (var i=1;i<=9;i++){ 
            if (checkValid(board,row,col,i)){
                board[row][col] = i;
                solve(board,next_row,next_col); 
                board[row][col] = 0; 
            }
        }
    }
    return;
  }
    solve(board,0,0)
    if(flag == false)
    {
      return "Not Possible"
    }else{
        return "Possible"
    }
}

function suduko(input)
{
 input = input.split('\n');
 let board = []
 for(let i=0; i<input.length; i++ )
 {
    board.push(input[i].trim().split(' ').map(Number))
 }
 return getSuduko(board)
}

module.exports = {suduko};
    