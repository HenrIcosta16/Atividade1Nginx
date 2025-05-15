  server {
            listen 80;
            server_name cafeteria.local;

            root /var/www/cafeteria-app;
            index index.html;

            location / {
                try_files $uri /index.html;
            }
        }     