Here I am learning nest js course 1.Modules,controllers,services,dependecy injection 2.Rest API,Users,Auth,curd

## commands:

1. install nestjs cli - npm i -g @nestjs/cli
2. cretae project - nest new my-project
3. create prject in same repo: nest new .
4. run project:npm run start:dev ,npm run start

## install this remoce eslint issue:

1. npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier
2. npx eslint 'src/\*\*/\*.ts' --fix
3. npx prettier --write 'src/\*\*/\*.ts'

## Generate files using cli

1. nest js cli commands to create controller,service,module
   a.nest generate controller users --no-spec
   b.nest generate module users --no-spec
   c.nest generate service users --no-spec

   Note: --no-spec for not to generate test file
