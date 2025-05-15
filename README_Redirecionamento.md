ESSE TUTORIAL TEM COMO OBJETIVO ENSINAR A CRIAR A PAGINA DO REACT VITE COM SUA TELA DE ROTAS COM NGINX 💻​​⬇️​     

 ​​  📁 Etapa 1: Criando o Projeto com Vite

        npm create vite@latest cafeteria-web

        Framework: React
    
        a linguagem: JavaScript

        cd cafeteria-web          #entra na pasta criada

        npm install               #faz a instalação

   
   📁 Etapa 2: Compila o projeto

        npm run build

   
   📁 Etapa 3: Criar pasta no servidor e mover arquivos

        sudo mkdir -p /var/www/cafeteria-app

        sudo cp -r dist/* /var/www/cafeteria-app/


   📁 Etapa 4: Configurar o Nginx 

        sudo nano /etc/nginx/sites-available/cafeteria

    #ao digitar o comando acima ele vai abrir o arquivo e quando abrir vai ter varios comandos exemplo: editar s n ?, sair == control x, salvar == control o, ler o arqv == control  R, executar == control t, e etc.

    #ao escolher editar voce faz a configuração abaixo do nom do servidor e diretorio do servidor alem do nome do html.
        
        
        server {
            listen 80;
            server_name cafeteria.local;

            root /var/www/cafeteria-app;
            index index.html;

            location / {
                try_files $uri /index.html;
            }
        }     

        
    #apos inserir é so salvar apertar e voltar pro cmd 
 

    #apos isso voce deve ativar o site com o comando abaixo no cmd:

        sudo ln -s /etc/nginx/sites-available/cafeteria /etc/nginx/sites-enabled/

        
    #em seguida voce deve reiniciar o nginx usando o comando abaixo:

        sudo systemctl restart nginx



    💻​​ Etapa 5: Adicionar cafeteria.local ao /etc/hosts

    #no windows o comando voce vai poder adicionar o ip e o end point como no linux, se for uma vm ou maquina principal o ip pode ser diferente:
        
        C:\Windows\System32\drivers\etc\hosts
    

    #no linux adicione o comando abaixo:
        
        sudo nano /etc/hosts

    #apos isso adicione o ip e o nome do end point do servidor, exemplo de ip e nome da maquina abaixo:

        127.19.2.1 cafeteria.local

    
    ✅ Etapa 6: Voce deve testar

    #acesse o navegador e digite o end point abaixo:

        http://cafeteria.local
        

    ​#vale lembrar que voce antes deve instalar o nginx fazer umas configuraçoes nele e o react vite na sua maquina.

    
    🏁 e é isso fim!


    site dos emojis  https://emojikeyboard.top/pt/ 