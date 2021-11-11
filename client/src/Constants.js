let language = 'eng';

const DATA = {
  LOGIN: {
    'eng': `Login`,
    'chi': `登录`,
  },
  ACCOUNT: {
    'eng': `Account`,
    'chi': `账号`,
  },
  PASSWORD: {
    'eng': `Password`,
    'chi': `密码`,
  },
  REGISTER: {
    'eng': `Register`,
    'chi': `注册`,
  },
  NAME: {
    'eng': `Name`,
    'chi': `名字`,
  },
  LANGUAGE: {
    'eng': `Language`,
    'chi': `语言`,
  },
  SCHOOL: {
    'eng': `School`,
    'chi': `学校`,
  },
  SELECT_SCHOOL: {
    'eng': `Select School`,
    'chi': `选择学校`,
  },
  ADD_SCHOOL: {
    'eng': `Add School`,
    'chi': `增加学校`,
  },
  SCHOOL_NAME: {
    'eng': `School Name`,
    'chi': `学校名字`,
  },
  SCHOOL_PIN: {
    'eng': `School Pin`,
    'chi': `学校密码`,
  },
  GO_TO_REGISTER: {
    'eng': `Don't have an account? Register`,
    'chi': `新用户注册`,
  },
  GO_TO_LOGIN: {
    'eng': `Have an account? Login`,
    'chi': `我已注册，去登录`,
  },
  PROFILE: {
    'eng': `Profile`,
    'chi': `个人资料`,
  },
  DASHBOARD: {
    'eng': `Dashboard`,
    'chi': `主页`,
  },
  PASSAGE: {
    'eng': `Passage`,
    'chi': `课文`,
  },
  CLASS: {
    'eng': `Class`,
    'chi': `班级`,
  },
  MANAGE: {
    'eng': `Manage`,
    'chi': `管理`,
  },
  SONG: {
    'eng': `Song`,
    'chi': `歌曲`,
  },
  EDIT: {
    'eng': `Edit`,
    'chi': `编辑`,
  },
  EDIT_PASSAGE: {
    'eng': `Edit Passage`,
    'chi': `编辑课文`,
  },
  EDIT_SONG: {
    'eng': `Edit Song`,
    'chi': `编辑歌曲`,
  },
  DELETE: {
    'eng': `Delete`,
    'chi': `删除`,
  },
  DELETE_PASSAGE_HEADER: {
    'eng': `Delete Passage`,
    'chi': `删除课文`,
  },
  DELETE_SONG_HEADER: {
    'eng': `Delete Song`,
    'chi': `删除歌曲`,
  },
  DELETE_PASSAGE_WARNING: {
    'eng': `All students' recordings for this passage will be deleted!`,
    'chi': `此课文所有学生的录音将被删除！`,
  },
  DELETE_SONG_WARNING: {
    'eng': `All students' recordings for this song will be deleted!`,
    'chi': `此歌曲所有学生的录音将被删除！`,
  },
  ADD_PASSAGE: {
    'eng': `Add Passage`,
    'chi': `添加课文`,
  },
  CREATE_PASSAGE: {
    'eng': `Create a New Passage`,
    'chi': `创建新课文`,
  },
  ADD_SONG: {
    'eng': `Add Song`,
    'chi': `添加歌曲`,
  },
  CREATE_SONG: {
    'eng': `Create a New Song`,
    'chi': `创建新歌曲`,
  },
  CREATE_CLASS: {
    'eng': `Create a New Class`,
    'chi': `创建新班级`,
  },
  PRIMARY_1: {
    'eng': `Primary 1`,
    'chi': `小一`,
  },
  PRIMARY_2: {
    'eng': `Primary 2`,
    'chi': `小二`,
  },
  PRIMARY_3: {
    'eng': `Primary 3`,
    'chi': `小三`,
  },
  PRIMARY_4: {
    'eng': `Primary 4`,
    'chi': `小四`,
  },
  PRIMARY_5: {
    'eng': `Primary 5`,
    'chi': `小五`,
  },
  PRIMARY_6: {
    'eng': `Primary 6`,
    'chi': `小六`,
  },
  CONFIRM_DELETE: {
    'eng': `Confirm Delete`,
    'chi': `确认删除`,
  },
  CANCEL: {
    'eng': `Cancel`,
    'chi': `取消`,
  },
  SAVE: {
    'eng': `Save`,
    'chi': `保存`,
  },
  TITLE: {
    'eng': `Title`,
    'chi': `标题`,
  },
  LEVEL: {
    'eng': `Level`,
    'chi': `年级`,
  },
  CONTENT: {
    'eng': `Content`,
    'chi': `内容`,
  },
  CONTENT_WORDS: {
    'eng': `Words in the Content`,
    'chi': `内容中的单词`,
  },
  ANALYSIS: {
    'eng': `Analysis`,
    'chi': `分析`,
  },
  STUDENT: {
    'eng': `Student`,
    'chi': `学生`,
  },
  STUDENTS: {
    'eng': `Student(s)`,
    'chi': `学生`,
  },
  TEACHER: {
    'eng': `Teacher`,
    'chi': `老师`,
  },
  STUDENT_LIST: {
    'eng': `Student List`,
    'chi': `学生名单`,
  },
  TEACHER_LIST: {
    'eng': `Teacher List`,
    'chi': `老师名单`,
  },
  NO_STUDENTS: {
    'eng': `No Students`,
    'chi': `没有学生`,
  },
  NO_TEACHERS: {
    'eng': `No Teachers`,
    'chi': `没有老师`,
  },
  DELETE_STUDENT_HEADER: {
    'eng': `Delete Student`,
    'chi': `删除学生`,
  },
  DELETE_STUDENT_WARNING: {
    'eng': `All recordings for this student will be deleted!`,
    'chi': `该学生的所有录音将被删除！`,
  },
  ADD_STUDENT: {
    'eng': `Add Student`,
    'chi': `添加学生`,
  },
  EDIT_STUDENT: {
    'eng': `Edit Student`,
    'chi': `编辑学生`,
  },
  OPTIONS: {
    'eng': `Options`,
    'chi': `选项`,
  },
  SEARCH: {
    'eng': `Search`,
    'chi': `搜索`,
  },
  PREVIOUS: {
    'eng': `Previous`,
    'chi': `上一页`,
  },
  NEXT: {
    'eng': `Next`,
    'chi': `下一页`,
  },
  SHOWING: {
    'eng': `Showing`,
    'chi': `显示`,
  },
  TO: {
    'eng': `to`,
    'chi': `至`,
  },
  TOTAL: {
    'eng': `Total`,
    'chi': `总`,
  },
  ENTRIES: {
    'eng': `entries`,
    'chi': `个记录`,
  },
  NO_MATCHING_RECORDS: {
    'eng': `No matching records found`,
    'chi': `未能找到匹配的记录`,
  },
  SHOW_PASSWORD: {
    'eng': `Show Password`,
    'chi': `显示密码`,
  },
  RESET_PASSWORD: {
    'eng': `Reset Password`,
    'chi': `重设密码`,
  },
  RESET_PASSWORD_BODY: {
    'eng': `New password set will be the same as account`,
    'chi': `新密码设置将与账号相同`,
  },
  CONFIRM: {
    'eng': `Confirm`,
    'chi': `确认`,
  },
  VIEW: {
    'eng': `view`,
    'chi': `查看`,
  },
  VIEW_STUDENT: {
    'eng': `View Student`,
    'chi': `查看学生`,
  },
  VIEW_TEACHER: {
    'eng': `View Teacher`,
    'chi': `查看老师`,
  },
  CLOSE: {
    'eng': `Close`,
    'chi': `关`,
  },
  ADD_CLASS: {
    'eng': `Add Class`,
    'chi': `添加班级`,
  },
  EDIT_CLASS: {
    'eng': `Edit Class`,
    'chi': `编辑班级`,
  },
  YEAR: {
    'eng': `Year`,
    'chi': `年`,
  },
  CLASS_NAME: {
    'eng': `Class Name`,
    'chi': `班级名称`,
  },
  ADD_TEACHER: {
    'eng': `Add Teacher`,
    'chi': `添加老师`,
  },
  EDIT_PROFILE: {
    'eng': `Edit Profile`,
    'chi': `编辑资料`,
  },
  DELETE_CLASS_HEADER: {
    'eng': `Delete Class`,
    'chi': `删除班级`,
  },
  DELETE_WARNING: {
    'eng': `This action cannot be undone!`,
    'chi': `此操作无法撤消！`,
  },
  CURRENT_PASSWORD: {
    'eng': `Current Password`,
    'chi': `当前密码`,
  },
  NEW_PASSWORD: {
    'eng': `New Password`,
    'chi': `新密码`,
  },
  REENTER_NEW_PASSWORD: {
    'eng': `Re-enter New Password`,
    'chi': `重新输入新密码`,
  },
  NOT_TEACHING: {
    'eng': `Not teaching any classes yet`,
    'chi': `尚未教任何班级`,
  },
  CLASS_ANALYSIS: {
    'eng': `Class Analysis`,
    'chi': `班级分析`,
  },
  RECORDING_SUBMISSION: {
    'eng': `Recording Submission`,
    'chi': `录音提交`,
  },
  REVIEW: {
    'eng': `Reviewed`,
    'chi': `评论`,
  },
  REVIEWED: {
    'eng': `Reviewed`,
    'chi': `已评论`,
  },
  NOT_REVIEWED: {
    'eng': `Not Reviewed`,
    'chi': `未评论`,
  },
  SUBMITTED: {
    'eng': `Submitted`,
    'chi': `已提交`,
  },
  NOT_SUBMITTED: {
    'eng': `Not Submitted`,
    'chi': `未提交`,
  },
  NO_SUBMISSIONS: {
    'eng': `No Recordings Submitted`,
    'chi': `没有学生提交录音`,
  },
  RECORDING: {
    'eng': `Recording`,
    'chi': `录音`,
  },
  RECORDING_1: {
    'eng': `Recording 1`,
    'chi': `录音一`,
  },
  RECORDING_2: {
    'eng': `Recording 2`,
    'chi': `录音二`,
  },
  RECORDING_3: {
    'eng': `Recording 3`,
    'chi': `录音三`,
  },
  NO_RECORDINGS: {
    'eng': `Student has not uploaded any recordings`,
    'chi': `学生尚未上传任何录音`,
  },
  NO_RECORDING: {
    'eng': `Student has not uploaded recording`,
    'chi': `学生尚未上传录音`,
  },
  SUBMITTED_DATE: {
    'eng': `Submitted Date`,
    'chi': `提交日期`,
  },
  SPEAKING_RATE: {
    'eng': `Speaking Rate (words/min)`,
    'chi': `语速 (字/分钟)`,
  },
  NUM_REPLAY: {
    'eng': `Times replayed sample reading`,
    'chi': `重复播放原音次数`,
  },
  NUM_RETRY: {
    'eng': `Times retried recording`,
    'chi': `重试录音次数`,
  },
  TRANSLATED_RECORDING: {
    'eng': `Translated Recording`,
    'chi': `录音翻译`,
  },
  SHOW_PASSAGE: {
    'eng': `Show Passage`,
    'chi': `显示原文`,
  },
  TEACHER_MARKS: {
    'eng': `Teacher's Marks`,
    'chi': `老师评分`,
  },
  TEACHER_FEEDBACK: {
    'eng': `Teacher's Feedback`,
    'chi': `老师评语`,
  },
  STUDENT_ANALYSIS: {
    'eng': `Student Analysis`,
    'chi': `学生分析`,
  },
  REMOVED_WORDS: {
    'eng': `Removed Words`,
    'chi': `少字`,
  },
  SELECT_FILE: {
    'eng': `Please select a file`,
    'chi': `请选择一个文件`,
  },
  CHOOSE_CSV: {
    'eng': `Choose .csv file`,
    'chi': `选择.csv文件`,
  },
  UPLOAD_CSV: {
    'eng': `Please upload .csv file`,
    'chi': `请上传.csv文件`,
  },
  CHECK_HEADER: {
    'eng': `Please check the file header`,
    'chi': `请检查文件的第一行`,
  },
  IMPORTING: {
    'eng': `Importing...`,
    'chi': `导入中...`,
  },
  IMPORT: {
    'eng': `Import`,
    'chi': `导入`,
  },
  IMPORT_STUDENTS: {
    'eng': `Import Students`,
    'chi': `导入学生资料`,
  },
  DO_NOT_CLOSE: {
    'eng': `Please do not close this window`,
    'chi': `请不要关闭此网页`,
  },
  IMPORT_INSTRUC_1: {
    'eng': `1. Only .csv files are accepted.`,
    'chi': `一、仅接受.csv文件。`,
  },
  IMPORT_INSTRUC_2: {
    'eng': `2. Rows with any field empty will be ignored.`,
    'chi': `二、任何字段为空的行将被忽略。`,
  },
  IMPORT_INSTRUC_3: {
    'eng': `3. First row of the imported file needs to be defined as 'account, name, password' (exact spelling).`,
    'chi': `三、导入文件的第一行需要定义为'account, name, password'（精确拼写）。`,
  },
  IMPORT_INSTRUC_EXAMPLE: {
    'eng': `Example:`,
    'chi': `例：`,
  },
  IMPORT_ROW_MISSING: {
    'eng': `row(s) with missing fields.`,
    'chi': `缺少字段的行。`,
  },
  IMPORT_ACCOUNT_EXISTS: {
    'eng': `account(s) already existed.`,
    'chi': `账号已存在。`,
  },
  SUCCESSFUL: {
    'eng': `Successful!`,
    'chi': `成功!`,
  },
  DONE: {
    'eng': `Done`,
    'chi': `完成`,
  },
  PASSAGE_ANALYSIS_INSTRUC_ALL: {
    'eng': `The table below displays the top 10 mispronounced words from all students, based on automated score.`,
    'chi': `下表根据自动评分显示了所有学生在这段文章中发音错误的前10个单词。`,
  },
  PASSAGE_ANALYSIS_INSTRUC_CLASS_1: {
    'eng': `The table below displays the top 10 mispronounced words from students in `,
    'chi': `下表根据自动评分显示了 `,
  },
  PASSAGE_ANALYSIS_INSTRUC_CLASS_2: {
    'eng': `, based on automated score.`,
    'chi': ` 在这段文章中发音错误的前10个单词。`,
  },
  NO_PASSAGE_RECORDINGS: {
    'eng': `No students have uploaded recordings for this passage yet.`,
    'chi': `尚无学生为此段上传录音。`,
  },
  NO_SONG_RECORDINGS: {
    'eng': `No students have uploaded recordings for this song yet.`,
    'chi': `尚无学生为此歌上传录音。`,
  },
  RANKING: {
    'eng': `Ranking`,
    'chi': `排行`,
  },
  WORD: {
    'eng': `Word`,
    'chi': `字`,
  },
  FREQUENCY: {
    'eng': `Frequency`,
    'chi': `次数`,
  },
  ANALYSING: {
    'eng': `Analysing...`,
    'chi': `分析中...`,
  },
  AVG_MISPRONOUNCED: {
    'eng': `Mispronounced Word Count (AVG)`,
    'chi': `发音错误单词 (平均)`,
  },
  AVG_AUTO_SCORE: {
    'eng': `Automated Score (AVG)`,
    'chi': `自动评分 (平均)`,
  },
  AVG_TEACHER_SCORE: {
    'eng': `Teacher Score (AVG)`,
    'chi': `老师评分 (平均)`,
  },
  AVG_TEST_SCORE: {
    'eng': `Test Score (AVG)`,
    'chi': `测验评分 (平均)`,
  },
  MAX_MISPRONOUNCED: {
    'eng': `Mispronounced Word Count (MAX)`,
    'chi': `发音错误单词 (最高)`,
  },
  MAX_AUTO_SCORE: {
    'eng': `Automated Score (MAX)`,
    'chi': `自动评分 (最高)`,
  },
  MAX_TEACHER_SCORE: {
    'eng': `Teacher Score (MAX)`,
    'chi': `老师评分 (最高)`,
  },
  MISPRONOUNCED: {
    'eng': `Mispronounced Word Count`,
    'chi': `发音错误单词`,
  },
  AUTO_SCORE: {
    'eng': `Automated Score`,
    'chi': `自动评分`,
  },
  AUTO_SCORE_MAX_10: {
    'eng': `Automated Score (max 10 marks)`,
    'chi': `自动评分（最高10分）`,
  },
  TEACHER_SCORE: {
    'eng': `Teacher Score`,
    'chi': `老师评分`,
  },
  NO_DATA_AVAILABLE: {
    'eng': `No Data Available`,
    'chi': `没有可用数据`,
  },
  PROGRESS_OVER_TIME: {
    'eng': `Progress Over Time`,
    'chi': `随着时间的进展`,
  },
  PROGRESS_ACROSS_PASSAGES: {
    'eng': `Progress Across Passages`,
    'chi': `随着课文的进展`,
  },
  PROGRESS_ACROSS_WORDS: {
    'eng': `Progress Across Words`,
    'chi': `随着单字的进展`,
  },
  TIME: {
    'eng': `Time`,
    'chi': `时间`,
  },
  VOCABULARY: {
    'eng': `Vocabulary (Individual Words)`,
    'chi': `识字 (单字)`,
  },
  VOCAB: {
    'eng': `Vocabulary`,
    'chi': `单字`,
  },
  ADD_VOCAB: {
    'eng': `Add Vocabulary`,
    'chi': `加单字`,
  },
  NO_CLASS_PASSAGES: {
    'eng': `Class has no assigned passages yet`,
    'chi': `班级尚未分配课文`,
  },
  PITCH: {
    'eng': `Pitch`,
    'chi': `音调`,
  },
  PINYIN: {
    'eng': `Pinyin`,
    'chi': `拼音`,
  },
  OVERVIEW: {
    'eng': `Overview`,
    'chi': `概况`,
  },
  OVERALL: {
    'eng': `Overall`,
    'chi': `总`,
  },
  AVG: {
    'eng': `AVG`,
    'chi': `平均`,
  },
  CLASS_ANALYSIS_INSTRUC: {
    'eng': `Scores below are based on teacher's average marks.`,
    'chi': `以下分数是基于老师的平均分数。`,
  },
  CLASS_AVG: {
    'eng': `Class AVG`,
    'chi': `全班平均`,
  },
  ALL_CLASSES: {
    'eng': `All Classes`,
    'chi': `所有班级`,
  },
  ERR_IMPORT: {
    'eng': `Import error`,
    'chi': `导入错误`,
  },
  ENTER_ACCOUNT: {
    'eng': `Enter account`,
    'chi': `请设置账号`,
  },
  ENTER_PASSWORD: {
    'eng': `Enter password`,
    'chi': `请设置密码`,
  },
  ENTER_NAME: {
    'eng': `Enter name`,
    'chi': `请设置名字`,
  },
  ENTER_SCHOOL_NAME: {
    'eng': `Enter school name`,
    'chi': `请设置学校名字`,
  },
  ENTER_SCHOOL_PIN: {
    'eng': `Enter school pin`,
    'chi': `请设置学校密码`,
  },
  ENTER_SONG_TITLE: {
    'eng': `Enter song title`,
    'chi': `歌曲标题`,
  },
  ENTER_PASSAGE_TITLE: {
    'eng': `Enter passage title`,
    'chi': `课文标题`,
  },
  ENTER_PASSAGE_CONTENT: {
    'eng': `Enter passage content`,
    'chi': `课文内容`,
  },
  ENTER_CONTENT_WORDS: {
    'eng': `Please separate the words in the content with a space and remove all punctuation. \nE.g. 我喜欢读书，你呢？--> 我 喜欢 读书 你 呢`,
    'chi': `请用空格分隔内容中的单词，并删除所有标点符号。 \n例：我喜欢读书，你呢？--> 我 喜欢 读书 你 呢`,
  },
  ENTER_CLASS_NAME: {
    'eng': `Enter class name`,
    'chi': `班级名称`,
  },
  ENTER_CURRENT_PASSWORD: {
    'eng': `Enter current password`,
    'chi': `请输入当前密码`,
  },
  ENTER_NEW_PASSWORD: {
    'eng': `Enter new password`,
    'chi': `请输入新密码`,
  },
  ENTER_REENTER_NEW_PASSWORD: {
    'eng': `Re-enter new password`,
    'chi': `请重新输入新密码`,
  },
  ENTER_FEEDBACK: {
    'eng': `Enter feedback`,
    'chi': `请输入评语`,
  },
  ERR_SELECT_SCHOOL: {
    'eng': `Please select a school`,
    'chi': `请选择一所学校`,
  },
  ERR_INCOMPLETE_FIELDS: {
    'eng': `Please fill in all details`,
    'chi': `请填写所有详细信息`,
  },
  ERR_CONTAINS_PUNCTUATION: {
    'eng': `Words in the content should not contain punctuation`,
    'chi': `内容中的单词不应包含标点符号`,
  },
  ERR_CONTENT_NOT_MATCH: {
    'eng': `Content does not match with words in the content`,
    'chi': `内容与内容中的单词不匹配`,
  },
  ERR_LOGIN: {
    'eng': `Login Error`,
    'chi': `无法登录`,
  },
  ERR_NOT_TEACHER_ACCOUNT: {
    'eng': `This is not a teacher account`,
    'chi': `这不是老师的账号`,
  },
  ERR_PASSWORD_INCORRECT: {
    'eng': `Password incorrect`,
    'chi': `密码错误`,
  },
  ERR_NO_ACCOUNT: {
    'eng': `No such account`,
    'chi': `没有此账号`,
  },
  ERR_REGISTER: {
    'eng': `Register Error`,
    'chi': `无法注册`,
  },
  ERR_SCHOOL_EXISTS: {
    'eng': `School already exists`,
    'chi': `已有此学校`,
  },
  ERR_ACCOUNT_EXISTS: {
    'eng': `Account already exists`,
    'chi': `已有此账号`,
  },
  ERR_PIN_INCORRECT: {
    'eng': `Incorrect school PIN`,
    'chi': `学校密码错误`,
  },
  ERR_ADD_STUDENT: {
    'eng': `Error adding student`,
    'chi': `无法添加学生`,
  },
  ERR_EDIT_STUDENT: {
    'eng': `Error updating student`,
    'chi': `无法更改学生`,
  },
  ERR_EDIT_USER: {
    'eng': `Error updating user`,
    'chi': `无法更改资料`,
  },
  ERR_FILL_CLASS_NAME: {
    'eng': `Please enter class name`,
    'chi': `请输入班级名称`,
  },
  ERR_FILL_TEACHER: {
    'eng': `Please add at least one teacher`,
    'chi': `请添加至少一位老师`,
  },
  ERR_NEW_PASSWORD_NOT_MATCH: {
    'eng': `New password does not match`,
    'chi': `新密码不匹配`,
  },
  ERR_RESET_PASSWORD: {
    'eng': `Error resetting password`,
    'chi': `无法重设密码`,
  },
  ERR_CURRENT_PASSWORD_INCORRECT: {
    'eng': `Current password incorrect`,
    'chi': `当前密码错误`,
  },
  ERR_VOCAB_INDIVIDUAL_WORDS: {
    'eng': `Only individual words are accepted for Vocabulary (eg. 爸)`,
    'chi': `仅接受单个单词 (例：爸)`,
  },
  URL_TO_VIDEO: {
    'eng': `URL to Video`,
    'chi': `视频网址`,
  },
  ENTER_URL: {
    'eng': `e.g. https://www.youtube.com/watch?v=1a2b3c4d5e`,
    'chi': `例: https://www.youtube.com/watch?v=1a2b3c4d5e`,
  },
  VIDEO: {
    'eng': `Music Video`,
    'chi': `音乐视频`,
  },
  URL_NOT_FOUND: {
    'eng': `URL cannot be accessed. Please check the URL again`,
    'chi': `无法访问网址。 请再次检查网址`,
  },
  ERR_URL_INVALID: {
    'eng': 'URL is not a valid Youtube link',
    'chi': `网址不是有效的 Youtube 网址`,
  },
  ANALYSE: {
    'eng': 'Analyse',
    'chi': `分析`,
  },
  GRADE: {
    'eng': 'Grade',
    'chi': `评分`,
  },
  MODE: {
    'eng': 'Mode',
    'chi': `方式`,
  },
  PRACTICE: {
    'eng': 'Practice',
    'chi': `练习`,
  },
  TEST: {
    'eng': 'Test',
    'chi': `测验`,
  },
  ATTEMPT: {
    'eng': 'Attempt',
    'chi': `尝试`,
  },
  SHOW_TEST_ONLY: {
    'eng': 'Show test mode results only',
    'chi': `仅显示测验方式结果`
  },
  SHOW_PRACTICE_ONLY: {
    'eng': 'Show practice mode results only',
    'chi': `仅显示练习方式结果`
  },
  SHOW_NAME: {
    'eng': 'Show students\' name',
    'chi': `显示学生姓名`
  },
  ACCURACY_MARKS: {
    'eng': `Accuracy`,
    'chi': `语音度`,
  },
  FLUENCY_MARKS: {
    'eng': `Fluency`,
    'chi': `流利度`,
  },
  EVALUATOR: {
    'eng': `Evaluator`,
    'chi': `评估者`,
  },
  HARDEST_WORDS: {
    'eng': `Average Class Score for Each Individual Word (Sorted by Score)`,
    'chi': `全班练习逐字分数（已按分数排序）`,
  },
  CHAPTER: {
    'eng': `Chapter`,
    'chi': `章节`,
  },
  FILENAME: {
    'eng': `File Name`,
    'chi': `文件名`,
  },
  ENTER_CHAPTER: {
    'eng': `Enter chapter, e.g. 12-1`,
    'chi': `输入章节, 例：12-1`,
  },
  ENTER_FILENAME: {
    'eng': `Enter file name, e.g. 12-1-xiao-bao-bao`,
    'chi': `输入文件名, 例：12-1-xiao-bao-bao`,
  },
  ALIGNED_LYRIC: {
    'eng': `Aligned Lyric`,
    'chi': `对齐歌词`,
  },
  SCORE_FILE: {
    'eng': `Score File`,
    'chi': `谱子文件`,
  },
  ENTER_ALIGNED_LYRIC: {
    'eng': `Enter aligned lyric, separated by line breaks. \ne.g. SIL 0.00 13.5 \n睡 13.5 13.96 \n得 13.96 14.11`,
    'chi': `输入对齐歌词, 由换行符分隔. \n例：SIL 0.00 13.5 \n睡 13.5 13.96 \n得 13.96 14.11`,
  },
  ENTER_SCORE_FILE: {
    'eng': `Enter score file, separated by line breaks. \ne.g. SIL 0 1 \n睡 54 0.75 \n得 54 0.25`,
    'chi': `输入谱子文件, 由换行符分隔. \n例：SIL 0 1 \n睡 54 0.75 \n得 54 0.25`,
  },
  ERR_ALIGN_LYRICS: {
    'eng': `Error aligning lyrics and notes`,
    'chi': `对齐歌词和音符时出错`
  }
};

export const getData = (key) => {
  return DATA[key][language];
};

export const setLanguage = (lang) => {
  language = lang;
}

export const getLanguage = () => {
  return language
}

export default getData;
