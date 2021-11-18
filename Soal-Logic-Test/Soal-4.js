class FibonacciNo
{
	minValue(a, b)
	{
		if (a < b)
		{
			return a;
		}
		return b;
	}
	nearestFibonacciNo(n)
	{
		var a = 0;
		var b = 1;
		var c = a + b;
		while (c <= n)
		{
			a = b;
			b = c;
			c = a + c;
		}
		// Get min difference
		var min = this.minValue(n - a, n - b);
		if (min == n - a)
		{
			// min difference of a
			min = a;
		}
		else
		{
			// min difference of b
			min = b;
		}
		process.stdout.write("\n Given n : " + n);
		process.stdout.write("\n Result : " + min);
	}
}

function main()
{
	var task = new FibonacciNo();
	// Test A
	// num = 22 
	// output = 21
	task.nearestFibonacciNo(22);
	// Test B
	// num = 10 
	// output = 8
	task.nearestFibonacciNo(10);
}
main();