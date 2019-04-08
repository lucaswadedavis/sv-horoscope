const Chance = require('chance');
const Handlebars = require('handlebars');
const signs = ['Executive', 'Engineer', 'PM', 'Designer'];

class Horoscope {
  constructor(sign, seed) {
    if (sign === 'product manager') sign = 'pm';
    const signs = new Set(['pm', 'executive', 'designer', 'engineer']);
    if (!signs.has(sign)) sign = 'engineer';
    this.chance = new Chance(seed);
    this.sign = sign;
    // PM (blue)
    this.pm = {
      feelings: [
        'Everything is behind schedule and you feel {{ stressed }}.',
        'You\'re carrying around a lot of anger because no one is answering your emails.',
      ],
      advice: [
        'Embrace that.',
        'Ignore that.',
        'Let it go.',
      ],
      opportunity: [
        'By being honest with your team, they will take pity on you and maybe ship on time for once.',
        'Elevate your thinking. There\'s a lot of opportunity to solve higher level problems than the ones your boss has assigned to you.',
        'Today is a good day to dive down into the weeds with your team.',
      ],
    }
    // Exec (gold)
    this.executive = {
      feelings: [
        'Every thing feels like it\'s {{ going_well }}.',
        'Today you feel like a million bucks: Don\'t flatter yourself. Have you seen your cap table?',
      ],
      advice: [
        'Get ready for that investor meeting - your runway won\'t last forever.',
        'Don\'t spend too much time in your inbox. Today is a great day for strategic thinking.',
        'Be more humble. Google wasn\'t built in a day.',
      ],
      opportunity: [
        'If you keep your eyes open, a {{ great_hire }} will pop up in an unexpected place.',
        'Ease up on the team - everyone\'s  working hard, and you don\'t pay enough attention to employee burnout.',
      ],
    }
    // Designers (orange)
    this.designer = {
      feelings: [
        'You {{ may }} feel a bit {{ stressed }} today.',
        'Use that manic energy from last weekend to carry you through the OKR meeting. No one can stop you!',
        'Find your center before entering the office today. There\'s going to be another re-org.',
      ],
      advice: [
        'Ping the engineer about those updates to the team page.',
        'You\'re not nearly as bad as you think you are. You are as overworked.',
        'Don\'t be afraid to push back. Your intuition is right: that prototype is nowhere near ready to ship',
      ],
      opportunity: [
        'Take that unexpected meeting with the recruiter. Great surprises come in unexpected packages.',
        'All work and no play make a dull Designer. Flex your creative muscles and make something unexpected. It will come in handy soon.'
      ],
    }
    // Engineers (green)
    this.engineer = {
      feelings: [
        'You may feel {{ stressed }} about what happened last week.',
        'Today is a great day! Use your energy to carry you through the sprint. DOUBLE ESPRESSO!',
      ],
      advice: [
        'Manage your own expectations.',
        'Don\'t stress too much about that p0. Today is a new chance to {{ build_something_great }}.',
        'There\'s a serenity to be found in the chaos of startup life, but look ups are \'O\' of \'N\' cubed.',
      ],
      opportunity: [
        'It\'s a good time to refactor all that code you pushed last Friday, before anyone notices.',
        'Document that thing you did last week, it will come in handy in performance season.',
        'Today is a great day to ship something. Get the intern do your code review.',
      ],
    }

    this.templateVars = {
      may: this.chance.pickone(['may', 'might', 'probably']),
      stressed: this.chance.pickone(['stressed', 'anxious', 'tired']),
      stress: this.chance.pickone(['stress', 'worry', 'think']),
      great_hire: this.chance.pickone(['solution to that HR problem', 'great hire', 'new investor']),
      build_something_great: this.chance.pickone(['build something great', 'fix all those horrible things you did last quarter', 'make up for your mistakes', 'become the engineer everyone already thinks you are']),
      going_well: this.chance.pickone(['going well', 'on fire', 'too quiet', 'out of control'])
    }
  }

  composeHoroscope() {
    const feeling = this.chance.pickone(this[this.sign].feelings);
    const advice = this.chance.pickone(this[this.sign].advice);
    const opportunity = this.chance.pickone(this[this.sign].opportunity);
    const horoscope = [feeling, advice, opportunity].join(' ');
    var template = Handlebars.compile(horoscope);
    return template(this.templateVars);
  }

}

exports.Horoscope = Horoscope;
