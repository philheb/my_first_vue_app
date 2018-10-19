new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false
    },
    methods: {
        startGame: function() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function() {
            this.playerAttacks(3, 10);
        },
        specialAttack: function() {
            this.playerAttacks(10, 20);
        },
        heal: function() {
            if(this.playerHealth <= 90) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 100;
            };
            this.monsterAttacks();
        },
        giveUp: function() {

        },
        playerAttacks: function(min, max) {
            this.monsterHealth -= this.calculateDamage(min, max);
            if(this.checkWin()) {
                return;
            };
            this.monsterAttacks();
        },
        monsterAttacks: function() {
            this.playerHealth -= this.calculateDamage(5, 12);
            this.checkWin();
        },
        calculateDamage: function(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin: function() {
            if(this.monsterHealth <= 0) {
                if(confirm('You Won! New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
                
            } else if(this.playerHealth <= 0) {
                if(confirm('You Lost! New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
                
            } return false; 
        }
    }
});