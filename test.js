import bug from "k6/x/bugxk6";
import { sleep } from 'k6';

const options = {
    discardResponseBodies: true,
    scenarios: {
        sleep1: {
            executor: 'constant-arrival-rate',
            exec: 'sleep1',
            duration: '10s',
            rate: 1,
            timeUnit: '1s',
            preAllocatedVUs: 1,
            maxVUs: 2,
            tags: { my_custom_tag: 'tag sleep1' },
            startTime: "0s"
      },
    },
  };

export const setup = () => {
    console.log("start");
};

export const sleep1 = () => {
    bug.Hello()
};

export const teardown = () => {
    console.log("stop");
};