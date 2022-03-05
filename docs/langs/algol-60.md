

# ALGOL 60 

https://code.fandom.com/wiki/Algol_60

```
begin
    outstring(‘Hello world!’)
end;
```

```
begin
   integer A, X; comment outer X;
   A := 3;
   X := 5;
   begin
      integer X, Y; comment inner X;
      X := 4; comment inner X assigned here;
      Y := 8;
   end
   print (X); comment prints "5", not "4" since this is outer scope;
Y := 12; comment illegal! Y not defined in outer scope;
end;
```

http://cs.ecs.baylor.edu/~maurer/SieveE/Algol60.htm

[Algol 60 - Example](http://cs.ecs.baylor.edu/~maurer/SieveE/SieveE.a60)

-----------
ALGOL 60

```
procedure Absmax(a) Size:(n, m) Result:(y) Subscripts:(i, k);
    value n, m; array a; integer n, m, i, k; real y;
comment The absolute greatest element of the matrix a, of size n by m,
    is transferred to y, and the subscripts of this element to i and k;
begin
    integer p, q;
    y := 0; i := k := 1;
    for p := 1 step 1 until n do
        for q := 1 step 1 until m do
            if abs(a[p, q]) > y then
                begin y := abs(a[p, q]);
                    i := p; k := q
                end
end Absmax
```


An alternative example, using Elliott Algol I/O is as follows. Elliott Algol used different characters for "open-string-quote" and "close-string-quote", represented here by  ‘  and  ’ .
```
 program HiFolks;
 begin
    print ‘Hello world’
 end;
```