export default {
  avatarID: {
    type: 'number',
    default: 0
  },
  avatarURL: {
    type: 'string',
    source: 'attribute',
    selector: 'img',
    attribute: 'src',
    default:
      'https://0.gravatar.com/avatar/00000000000000000000000000000000?s=128&d=mp&r=g'
  },
  avatarAlt: {
    type: 'string',
    source: 'attribute',
    selector: 'img',
    attribute: 'alt',
    default: ''
  },
  avatarbordercolor: {
    type: 'string'
  },
  avatarName: {
    type: 'string',
    default: ''
  },
  comment: {
    type: 'string',
    source: 'html',
    selector: '.talk-comment',
    multiline: 'p',
    default: ''
  },
  modifier: {
    type: 'string',
    default: ''
  }
}
