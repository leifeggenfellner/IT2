function collide(player, ball) {
    if (player.left < ball.right && playeer.right > ball.left && player.top < ball.bottom && player.bottom > ball.top) {
        ball.dy = -ball.dy
    }
}