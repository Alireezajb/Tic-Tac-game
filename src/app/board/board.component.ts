import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squares!: any[];
  xIsNext!: boolean;
  winner: any;

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.squares = Array(9);
    // this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(idx: number) {
    if (!this.squares[idx]) {
      this.squares.splice(idx, 1, this.player);           
      this.xIsNext = !this.xIsNext;     
 
    }

    this.winner = this.calculateWinner();
 
  }
  
  calculateWinner() {
    const lines = [
      [0, 1, 2],     //0
      [3, 4, 5],     //1
      [6, 7, 8],     //2
      [0, 3, 6],     //3
      [1, 4, 7],     //4
      [2, 5, 8],     //5
      [0, 4, 8],     //6
      [2, 4, 6],     //7
    ];

    for (let i = 0; i < lines.length; i++) {    
      const [a, b, c] = lines[i];
      
      if
        (
        this.squares[a] && // 0
                    //x                 //x
        this.squares[a] === this.squares[b] &&
                    //x                //x
        this.squares[a] === this.squares[c]
      ) 

      {
        return this.squares[a];
  
      }
    }
    return null
  }

}
