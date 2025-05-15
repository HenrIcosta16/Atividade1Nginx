ESSE TUTORIAL TEM COMO OBJETIVO ENSINAR A REALIZAR OS TESTES DE CARGA SIMPLES NO APP REACT DA CAFETERIA COM Apache Bench NO SERVIDOR NGINX 💻​​⬇️


📁 Etapa 1: instalar o apache

    sudo apt update
    sudo apt install apache2-utils -y


🌐 Etapa 2: Verificar se a aplicação está no ar

    http://cafeteria.local




⚙️ Etapa 3: Executar o teste de carga com Apache Bench

 #aqui eu  simulei 100 requisições simultâneas, com 10 conexões concorrentes na rota principal / da minha aplicação React (cafeteria.local). deve se utilizar o comando abaixo na entrada do cmd: 

    ab -n 100 -c 10 http://cafeteria.local/


#📌 Significado dos parâmetros do comando:

    -n 100: número total de requisições

    -c 10: número de conexões simultâneas

    http://cafeteria.local/: end point ou url do serviço a ser testado

    
#no meu exemplo eu nomiei o servidor como end point http://react.local/ e como diretorio root do servidor defini react-app, mas é so trocar os dados na hora de criar a pasta. 

📊 Etapa 4: veja no exemplo abaixo como seria a saida na versao da atividade da cafeteria:

        VirtualBox:~$ ab -n 100 -c 10 http://cafeteria.local/
        This is ApacheBench, Version 2.3 <$Revision: 1903618 $>
        Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
        Licensed to The Apache Software Foundation, http://www.apache.org/

        Benchmarking react.local (be patient).....done


        Server Software:        nginx/1.24.0
        Server Hostname:        cafeteria.local
        Server Port:            80

        Document Path:          /
        Document Length:        459 bytes

        Concurrency Level:      10
        Time taken for tests:   0.010 seconds
        Complete requests:      100
        Failed requests:        0
        Total transferred:      70100 bytes
        HTML transferred:       45900 bytes
        Requests per second:    10242.75 [#/sec] (mean)
        Time per request:       0.976 [ms] (mean)
        Time per request:       0.098 [ms] (mean, across all concurrent requests)
        Transfer rate:          7011.88 [Kbytes/sec] received

        Connection Times (ms)
                    min  mean[+/-sd] median   max
        Connect:        0    0   0.3      0       1
        Processing:     0    0   0.4      0       2
        Waiting:        0    0   0.3      0       2
        Total:          0    1   0.5      1       2

        Percentage of the requests served within a certain time (ms)
        50%      1
        66%      1
        75%      1
        80%      1
        90%      1
        95%      2
        98%      2
        99%      2
        100%      2 (longest request)
        VirtualBox:~$ 


#Indicadores importantes:

    #Requests per second: quanto maior, melhor

    #Time per request: quanto menor, melhor (tempo de resposta médio)

    #Failed requests: deve ser 0


⚠️ Dicas importantes

#Sempre certifique-se de que a aplicação React está corretamente compilada e que os arquivos foram copiados para /var/www/cafeteria-app.

#Alem disso o Nginx precisa estar rodando antes de executar o ab.

#O domínio cafeteria.local precisa estar resolvendo corretamente via /etc/hosts tanto no windows como no linux.


#com esse passo a passo da pra realizar os testes testes de carga na maquina.

🏁 Fim!

