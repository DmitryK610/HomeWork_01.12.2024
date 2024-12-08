<template>
 
    <div>
        <h2>Регистрация выполнена</h2>
        <p>Вы зарегестрированы</p>
        <p>Имя : {{ $route.query.name }}</p>
      <p>Эл. почта : {{ $route.query.email  }}</p>
      <p>Пароль: {{ $route.query.password  }}</p>
      
    </div>
   

    </template>
 