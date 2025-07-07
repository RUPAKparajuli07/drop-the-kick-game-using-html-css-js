
  move(delta) {
      this.posX -= this.velocityX * delta;
    if (this.posX >= element.width - this.width || this.posX <= 0) {
      this.velocityX = -this.velocityX
    }
  }

  bigbossMove() {
    const generateRandomNumberInArr = (min, max) => {return Math.random() * (max - min) + min}
    const randomNumber = generateRandomNumberInArr(1, 100);
    if (randomNumber >= 80) {
      this.posX -= this.velocityX * delta;
      if (this.posX >= element.width - this.width || this.posX <= 0) {
        this.velocityX = -this.velocityX
      }
    }
  }

  fall(deltaValue) {
    this.velocityY = 0.3;
    this.posY += this.velocityY * deltaValue;
  }

  // *** PLAYER HITBOX ***
  _isRightCompBorderCollided(enemy) {
    return this._rightCompHb() >= enemy._leftCompHb();
  }

  _isLeftCompBorderCollided(enemy) {
    return this._leftCompHb() <= enemy._rightCompHb();
  }

  _isTopCompBorderCollided(enemy) {
    return this._topCompHb() <= enemy._botCompHb();
  }

  _isBottomCompBorderCollided(enemy) {
    return this._botCompHb() >= enemy._topCompHb();
  }

  isHitTaken(enemy) {
    return (
      this._isRightCompBorderCollided(enemy) &&
      this._isLeftCompBorderCollided(enemy) &&
      this._isTopCompBorderCollided(enemy) &&
      this._isBottomCompBorderCollided(enemy)
    );
  }
}
