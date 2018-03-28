import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory as CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as MobileBuiltInKeywords
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testcase.TestCaseFactory as TestCaseFactory
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testdata.TestDataFactory as TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository as ObjectRepository
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WSBuiltInKeywords
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUiBuiltInKeywords
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys

WebUI.openBrowser('')

WebUI.navigateToUrl('https://registration-project-e9fc0.firebaseapp.com/login')

WebUI.setText(findTestObject('UC-10 Put the grade_OR/input_email'), 'teacher1@cmuTEA.ac.th')

WebUI.setText(findTestObject('UC-10 Put the grade_OR/input_password'), '1')

WebUI.click(findTestObject('UC-10 Put the grade_OR/button_Login'))

WebUI.click(findTestObject('UC-10 Put the grade_OR/a_Teacher Information'))

WebUI.click(findTestObject('UC-10 Put the grade_OR/button_Grading'))

WebUI.selectOptionByValue(findTestObject('UC-10 Put the grade_OR/select_Grade'), 'A', true)

WebUI.selectOptionByValue(findTestObject('UC-10 Put the grade_OR/select_Grade                  _1'), 'B', true)

WebUI.selectOptionByValue(findTestObject('UC-10 Put the grade_OR/select_Grade                  _2'), 'C', true)

WebUI.verifyElementPresent(findTestObject('UC-10 Put the grade_OR/label_3'), 0)

WebUI.click(findTestObject('UC-10 Put the grade_OR/input_submit'))

WebUI.closeBrowser()

