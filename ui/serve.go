package ui

import (
	"github.com/gin-gonic/gin"
	"github.com/gobuffalo/packr/v2"
	"net/http"
)

var box = packr.New("ui", "../ui/build")

func Register(r *gin.Engine) {
	ui := r.Group("/")

	ui.GET("/", serveFile("index.html", "text/html"))
	ui.GET("/static/*any", gin.WrapH(http.FileServer(box)))
}

func serveFile(name, contentType string) gin.HandlerFunc {
	content, err := box.FindString(name)
	if err != nil {
		panic(err)
	}
	return func(ctx *gin.Context) {
		ctx.Header("Content-Type", contentType)
		ctx.String(200, content)
	}
}
