package bugxk6

import (
	"fmt"

	"github.com/ibm-messaging/mq-golang-jms20/mqjms"
	"go.k6.io/k6/js/modules"
)

var i int32 = 0

func init() {
	modules.Register("k6/x/bugxk6", new(K6ibmmq))
}

type K6ibmmq struct {
	mqjms.ConnectionFactoryImpl
}

func (k K6ibmmq) Hello(){
	fmt.Println(k.PortNumber)
}