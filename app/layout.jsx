"use client"
import { useEffect } from 'react';
import "./globals.css";

export default function RootLayout({ children }) {
    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.min.js');
    }, []);

    return (
        <html lang="en">
            <head>
                <link rel='icon' type='image/png' href='../favicon.ico' /> 
                 <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"/>
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}