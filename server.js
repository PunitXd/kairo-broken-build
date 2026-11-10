// Never runs: the image build stops at npm install, because the dependency
// in package.json doesn't exist. Kairo should end the run at FAILED in
// BUILDING with the npm error in its log tail (P1 exit criterion).
import http from 'node:http';

http.createServer((req, res) => res.end('ok')).listen(process.env.PORT || 3000, '0.0.0.0');
