package main

import (
	"github.com/gin-gonic/gin"
	"partyman/ui"
)

func main() {
	r := gin.Default()
	ui.Register(r)

	r.Run()
}
