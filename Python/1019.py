#Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica, e informe-o expresso no formato horas:minutos:segundos.



n = int(input())

convertido = n / 60
horas = int(convertido / 60)
minutos = int(convertido % 60)
segundos = int(n % 60)
print(f'{horas}:{minutos}:{segundos}')