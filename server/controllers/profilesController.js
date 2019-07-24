module.exports = {

	getByEmail: function(req, res) {
		const db = req.app.get('db')
		const { email } = req.params

		const findUser  = db.users.data.find(x => x.email === email)
		const findProfile = db.profiles.data.find(x => x.userId == parseInt(findUser.id))
		
		res.status(200).json(findProfile)
	},

	getById: function(req, res) {
		const db = req.app.get('db')
		const { userid } = req.params

		const findProfile = db.profiles.data.find(x => x.userId == parseInt(userid))
		
		res.status(200).json(findProfile)
	},

	update: function(req, res) {
		const { thumbnail, about } = req.body;
		const { id } = req.params
		const userId = parseInt(id)
		const db = req.app.get('db')
		
		const profileIndex = db.profiles.data.find(profile => profile.userId == userId)
		if(profileIndex != undefined){
			Object.assign(db.profiles.data[profileIndex.userId], req.body)
			res.status(200).json(db)
		}
		else{
			res.status(404).send('ERROR')
		}
	}
};