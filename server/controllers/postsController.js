module.exports = {

	getAllPostByUser: function(req, res) {
		const db = req.app.get('db')
		const { userId } = req.params
		
		const post = db.posts.data.filter(x => x.userId == parseInt(userId))
		
		res.status(200).json(post)
	},

	getById: function(req, res) {
		const db = req.app.get('db')
		const { postId } = req.params

		const post = db.posts.data.find(x => x.userId == parseInt(postId))
		
		res.status(200).json(post)
	},

	getWithComments: function(req, res) {
		const db = req.app.get('db')
		const { postId } = req.params
		
		const post = db.comments.data.filter(x => x.postId == parseInt(postId))
		
		res.status(200).json(post)
	},

	create: function(req, res) {
		const { userId, content } = req.body;
		const db = req.app.get('db')

		db.posts.data.push({ userId, content })
		db.posts.id++

		res.status(201).json(db)
	}
};