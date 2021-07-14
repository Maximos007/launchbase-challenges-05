const { age, graduation, date } = require('../../lib/utils');
const Teacher = require('../models/Teacher');

module.exports = {
	index(req, res) {
		Teacher.all((teachers) => {
			return res.render('teachers/index', {teachers});
		});

	},

	create(req, res) {
		return res.render('teachers/create');
	},
  
	post(req, res) {
		const keys = Object.keys(req.body);

		// eslint-disable-next-line no-undef
		for (key of keys) {
			
			// eslint-disable-next-line no-undef
			if(req.body[key] == '')
      
				return res.send('Please, fill all fields!');
		}
    
		Teacher.create(req.body, (teacher) => {
			return res.redirect(`/teachers/${teacher.id}`);
		});

		return;
	},

	show(req, res) {
		Teacher.find(req.params.id, function (teachers) {
			if (!teachers) res.send('Professor não encontrado!');

			teachers.age = age(teachers.birth_date);
			teachers.education_level = graduation(teachers.education_level);
			teachers.subjects_taught = teachers.subjects_taught.split(',');
			teachers.created_at = date(teachers.created_at).format;

			return res.render('teachers/show', { teachers });
		});
	},

	edit(req, res) {
		Teacher.find(req.params.id, function (teachers) {
			if (!teachers) res.send('Professor não encontrado!');
				
			teachers.birth_date = date(teachers.birth_date).iso;

			return res.render('teachers/edit', { teachers });
		});
	},
	put(req, res) {
		const keys = Object.keys(req.body);

		for (let key of keys) {
			if (req.body[key] == '')
				return res.send('Por favor, preencha todos os campos.');
		}
		
		Teacher.update(req.body, function () {
			return res.redirect(`/teachers/${req.body.id}`);
		});
	},
	delete(req, res) {
		Teacher.delete(req.body.id, function () {
			return res.redirect('/teachers');
		});
	}
};