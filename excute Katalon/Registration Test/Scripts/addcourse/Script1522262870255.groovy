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

WebUI.setText(findTestObject('input_email'), 'admin1@cmuAD.ac.th')

WebUI.setText(findTestObject('input_password'), '1')

WebUI.click(findTestObject('button_Login'))

WebUI.click(findTestObject('a_Add Course'))

WebUI.setText(findTestObject('input_courseName'), 'economic')

WebUI.setText(findTestObject('input_courseID'), '339933')

WebUI.setText(findTestObject('input_maximumStudents'), '30')

WebUI.setText(findTestObject('input_credit'), '3')

WebUI.setText(findTestObject('input_form-control'), 'Kongphop')

WebUI.click(findTestObject('label_Semester1'))

WebUI.setText(findTestObject('input_year'), '1')

WebUI.click(findTestObject('input_submit'))

WebUI.click(findTestObject('label_339933'))

WebUI.click(findTestObject('label_economic'))

WebUI.closeBrowser()

