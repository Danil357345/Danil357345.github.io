

def fizzbuzz(n)
  for i in 1..n do
    if i % 15 == 0
      puts "fizzbuzz"
    elsif i % 3 == 0
      puts "fizz"
    elsif i % 5 == 0
      puts "buzz"
    else
      puts i
    end
  end
end
 
def main()
  arr = fizzbuzz(100)

  #puts arr
end

main()

# how to run:
# ruby fizzbuzz.rb
