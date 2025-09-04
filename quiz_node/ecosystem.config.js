module.exports = {
  apps: [
    {
      name: 'quizApi',
      script: './start.sh',
      cwd: '/var/www/html/Quiz/quiz_node',
      error_file: '/var/log/quizApi.err.log',
      out_file: '/var/log/quizApi.out.log',
      merge_logs: true,
      autorestart: true,
      watch: false,
    },
  ],
};

