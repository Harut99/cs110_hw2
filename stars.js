<script>
const row_n=5;
const space = function(n){
        if (n === 0){
          	return "";
        }
        return " " + space(n-1);
};
     const stars = function(n){
        if (n === 0){
          	return "";
        }
        return "*" + stars(n-1);
        };
    const triangleStars = function(n){
		if(n === 0){
        	return '';
            }
        return triangleStars(n-1) + "\n" + space(row_n - n) + stars(2 * n -1);
        };
        
    console.log(triangleStars(row_n));
</script>