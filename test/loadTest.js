import http from "k6/http";
import { check, sleep } from "k6";
export let options = {
  vus: 200,
  duration: "300s"
};
export default function() {
  let res = http.get("http://localhost:3000/api/v1/note");
  check(res, {
    success: r => r.status == 200
  });
}
