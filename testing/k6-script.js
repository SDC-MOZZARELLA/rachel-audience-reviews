import http from 'k6/http';
import { check } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 1 },
    { duration: '30s', target: 50 },
    { duration: '30s', target: 100 },
  ],
  rps: 1000,
};

export default function () {
  const res = http.get(`http://localhost:8100/?movie=${Math.floor(Math.random() * Math.floor(999999))}`);
  check(res, {
    'status 200': (r) => r.status === 200,
    'transaction time OK': (r) => r.timings.duration < 200,
  });
}
