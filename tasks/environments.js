module.exports = function(grunt){
  grunt.config('environments', {

    staging: {
      options: {
        host: 'designlab.com.br',
        username: 'dlab34',
        password: 'q#9ebdc.',
        deploy_path: '/staging.designlab.com.br/Skeleton',
      }
    },
      
    production: {
      options: {
        host: 'host...',
        username: 'user',
        password: 'password',
        deploy_path: '/path/to',
      }
    }

  });
};