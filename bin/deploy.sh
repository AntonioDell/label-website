user=$1
current_dir=$(pwd)
dist_dir=$current_dir/dist
website_dir=/var/www/website
domain=h2939586.stratoserver.net


npm run build

ssh $user@$domain "rm -rf $website_dir"
scp -r $dist_dir $user@$domain:$website_dir