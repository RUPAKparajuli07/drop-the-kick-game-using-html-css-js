
  draw() {
    this.c.fillStyle = this.color;
    this.c.fillRect(this.posX, this.posY, this.width, this.height);
  }

  _leftCompHb() {
    return this.posX;
  }

  _rightCompHb() {
    return this.posX + this.width;
  }

  // talvez nao precise e eu nao tenho certeza se esta certo
  _topCompHb() {
    return this.posY;
  }

  // talvez nao precise e eu nao tenho certeza se esta certo
  _botCompHb() {
    return this.posY + this.height;
  }
}
