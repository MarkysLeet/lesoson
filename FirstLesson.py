print(5) # Вывод текста (числа)

print(type(5)) # Вывод типа числа 5 ( class 'int' = тип 'целое число' )

print(type(0.5)) # Вывод типа числа 0.5

print(5 + 5) # Сложение

print(5 // 5) # // - Целочисленное деление, / - Деление

print(5 % 3) # % - Остаток от деления ( 5 поделить на 3 остаток 2 )

print(5 ** 5) # Возведение в степень ( 5 в 5-й степени )

print('Hello world')

print(type('Hello world')) # string - строка

print(True, False) # boolean - логический тип данных

print(type(True)) # <class 'bool'>

print(5 > 10)

print(5 != 4) # Проверка на (равно)

print(5 != 5 and 5 < 10) # != не равно

print(int('5') + 5) # Перевод 5 из типа строки в тип целого числа и сложение его

print(type(int('5'))) # Перевод 5 из типа строки в тип целого числа и вывод его типа

print(type(str(5)))

# //////////////////////////////////////// Domashka ///////////////////////////////////////////

a = 23891471923807487.142352314353455
b = 23891471923807487.142352314356734
c = 23891471923843245.142352314334563
d = 23891471923843245.142352314334553

x = a+c
y = d+b
# print(a + c > b + d)
if (a + c) > (b + d):
    print('Сумма 1 и 3 больше суммы 2 и 4')
if (a + c) == (b + d):
    print('Сумма чисел равна')
if (a + c) < (b + d):
    print('Сумма чисел 1 и 3 меньше суммы 2 и 4')
print('Сумма чисел 1 и 3 равна =', x , ', сумма чисел 2 и 4 равна =', y )
    