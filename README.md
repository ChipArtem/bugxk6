## Project for demnstration bug

#### try create k6 with module:

xk6 build --output xk6 --with github.com/ChipArtem/bugxk6

#### error:
../../../../go/pkg/mod/github.com/ibm-messaging/mq-golang-jms20@v1.9.0/jms20subset/MQOptions.go:5:32: undefined: ibmmq.MQCNO
#### full info:
2023/01/11 11:09:39 [INFO] Temporary folder: /Users/chip/git_repo/bugxk6/buildenv_2023-01-11-1109.559430917
2023/01/11 11:09:39 [INFO] Initializing Go module
2023/01/11 11:09:39 [INFO] exec (timeout=10s): /usr/local/go/bin/go mod init k6 
go: creating new go.mod: module k6
2023/01/11 11:09:39 [INFO] Pinning versions
2023/01/11 11:09:39 [INFO] exec (timeout=0s): /usr/local/go/bin/go mod edit -require github.com/ChipArtem/bugxk6@latest 
2023/01/11 11:09:39 [INFO] exec (timeout=0s): /usr/local/go/bin/go mod tidy -compat=1.17 
go: downloading github.com/ChipArtem/bugxk6 v0.0.0-20230111080905-ebbb48a21070
go: finding module for package github.com/nxadm/tail
go: finding module for package github.com/google/go-cmp/cmp
go: found github.com/google/go-cmp/cmp in github.com/google/go-cmp v0.5.9
go: found github.com/nxadm/tail in github.com/nxadm/tail v1.4.8
2023/01/11 11:09:55 [INFO] exec (timeout=0s): /usr/local/go/bin/go mod tidy -compat=1.17 
2023/01/11 11:09:55 [INFO] Writing main module: /Users/chip/git_repo/bugxk6/buildenv_2023-01-11-1109.559430917/main.go
2023/01/11 11:09:55 [INFO] exec (timeout=0s): /usr/local/go/bin/go mod tidy -compat=1.17 
2023/01/11 11:09:55 [INFO] Build environment ready
2023/01/11 11:09:55 [INFO] Building k6
2023/01/11 11:09:55 [INFO] exec (timeout=0s): /usr/local/go/bin/go mod tidy -compat=1.17 
2023/01/11 11:09:55 [INFO] exec (timeout=0s): /usr/local/go/bin/go build -o /Users/chip/git_repo/bugxk6/xk6 -ldflags=-w -s -trimpath 
#github.com/ibm-messaging/mq-golang-jms20/jms20subset
../../../../go/pkg/mod/github.com/ibm-messaging/mq-golang-jms20@v1.9.0/jms20subset/MQOptions.go:5:32: undefined: ibmmq.MQCNO
../../../../go/pkg/mod/github.com/ibm-messaging/mq-golang-jms20@v1.9.0/jms20subset/MQOptions.go:8:25: undefined: ibmmq.MQCNO
2023/01/11 11:09:56 [INFO] Cleaning up temporary folder: /Users/chip/git_repo/bugxk6/buildenv_2023-01-11-1109.559430917
2023/01/11 11:09:56 [FATAL] exit status 2